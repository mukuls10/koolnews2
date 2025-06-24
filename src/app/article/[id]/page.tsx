import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.id === resolvedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-blue-600">
                {article.category}
              </span>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {article.description}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
} 