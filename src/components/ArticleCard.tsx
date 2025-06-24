import { Article } from "@/types/article";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600">{article.category}</span>
            <span className="text-sm text-gray-500">{article.date}</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
            {article.title}
          </h2>
        </div>
      </div>
    </Link>
  );
} 