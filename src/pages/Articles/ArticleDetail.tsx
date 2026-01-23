import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { articleApi, type ArticleDetailData } from "../../api/articleApi";
import Loader from "../../components/common/Loader";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [pageData, setPageData] = useState<ArticleDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        window.scrollTo(0, 0);
        const result = await articleApi.getArticleBySlug(slug);
        setPageData(result);
        setCurrentGalleryIndex(0);
      } catch (error) {
        console.error("Failed to fetch article", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) return <Loader />;
  if (!pageData) return null;

  const { data: article, related } = pageData;

  const contentParagraphs = article.content.split("</p>");
  const contentImages = article.content_images || [];
  const firstContentImage = contentImages.length > 0 ? contentImages[0] : null;
  const remainingImages =
    contentImages.length > 1 ? contentImages.slice(1) : [];

  const nextGallery = () => {
    setCurrentGalleryIndex((prev) =>
      prev === remainingImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevGallery = () => {
    setCurrentGalleryIndex((prev) =>
      prev === 0 ? remainingImages.length - 1 : prev - 1,
    );
  };

  const hasEnoughContentToSplit = contentParagraphs.length > 2;

  return (
    <div className="relative min-h-screen bg-white pt-24 md:pt-32 pb-20 font-jakarta overflow-x-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#5a1e1b] text-[#5a1e1b] hover:bg-[#5a1e1b] hover:text-white transition-all duration-300 font-medium text-sm shadow-sm active:scale-95"
        >
          <ArrowLeft size={16} /> Kembali
        </button>

        <div className="max-w-5xl mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5a1e1b] mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
              <Calendar size={14} className="text-[#0e3b28]" />
              <span>{article.published_at_human}</span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-75 sm:h-100 md:h-125 mb-12 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <img
            src={article.featured_image || "/images/placeholder-project.jpg"}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
              {hasEnoughContentToSplit ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentParagraphs.slice(0, 1).join("</p>") + "</p>",
                    }}
                  />
                  <div className="my-8 block clearfix">
                    {firstContentImage && (
                      <div className="float-none md:float-left md:mr-8 mb-6 w-full md:w-[45%]">
                        <img
                          src={firstContentImage}
                          alt="Content highlight"
                          className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                        />
                      </div>
                    )}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: contentParagraphs.slice(1).join("</p>"),
                      }}
                    />
                    <div className="clear-both"></div>
                  </div>
                </>
              ) : (
                <div className="block clearfix">
                  {firstContentImage && (
                    <div className="float-none md:float-left md:mr-8 mb-6 w-full md:w-[45%]">
                      <img
                        src={firstContentImage}
                        alt="Content highlight"
                        className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                      />
                    </div>
                  )}
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                  <div className="clear-both"></div>
                </div>
              )}
            </div>

            {remainingImages.length > 0 && (
              <div className="mt-12 border-t border-gray-100 pt-8">
                <h4 className="text-xl font-bold text-[#5a1e1b] mb-6">
                  Galeri Dokumentasi
                </h4>

                <div className="relative w-full h-75 md:h-100 rounded-xl overflow-hidden shadow-sm group border border-gray-100 bg-gray-50">
                  <img
                    src={remainingImages[currentGalleryIndex]}
                    alt={`Gallery ${currentGalleryIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />

                  {remainingImages.length > 1 && (
                    <>
                      <button
                        aria-label="Previous slide"
                        onClick={prevGallery}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#5a1e1b] p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                      >
                        <ChevronLeft size={24} />
                      </button>

                      <button
                        aria-label="Next slide"
                        onClick={nextGallery}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#5a1e1b] p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                      >
                        <ChevronRight size={24} />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {remainingImages.map((_, idx) => (
                          <div
                            key={idx}
                            onClick={() => setCurrentGalleryIndex(idx)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                              idx === currentGalleryIndex
                                ? "bg-[#5a1e1b] w-6"
                                : "bg-white/70 hover:bg-white"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <p className="text-center text-sm text-gray-400 mt-3">
                  {currentGalleryIndex + 1} dari {remainingImages.length} gambar
                </p>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 w-full sticky top-32">
            <div>
              <h3 className="text-xl font-bold text-[#5a1e1b] mb-6 border-l-4 border-[#0e3b28] pl-4">
                Artikel Lainnya
              </h3>

              <div className="flex flex-col gap-8">
                {related.length > 0 ? (
                  related.map((item) => (
                    <div key={item.id} className="group flex flex-col gap-3">
                      <Link
                        to={`/articles/${item.slug}`}
                        className="block overflow-hidden rounded-xl h-48 w-full shadow-sm relative"
                      >
                        <img
                          src={
                            item.featured_image ||
                            "/images/placeholder-project.jpg"
                          }
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>

                      <div className="space-y-2">
                        <Link to={`/articles/${item.slug}`}>
                          <h4 className="text-lg font-bold text-[#5a1e1b] transition-colors line-clamp-2 leading-tight hover:text-[#8a2f2b]">
                            {item.title}
                          </h4>
                        </Link>

                        <div className="flex justify-end mt-6">
                          <Link
                            to={`/articles/${item.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#5a1e1b] text-[#5a1e1b] text-sm font-medium hover:bg-[#5a1e1b] hover:text-white transition-all duration-300"
                          >
                            See More <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>

                      <hr className="border-gray-200 mt-2" />
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <p className="text-gray-400 text-sm italic">
                      Belum ada artikel terkait.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
