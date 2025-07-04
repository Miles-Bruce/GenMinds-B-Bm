import { Copy, Bookmark, MessageCircle, Plus, User, Heart, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PromptCardProps {
  id: number;
  title: string;
  content: string;
  author: string;
  authorAvatar?: string;
  tags: string[];
  category: string;
  likes: number;
  comments: number;
  copies: number;
  remixes: number;
  timeAgo: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  remixedFrom?: {
    author: string;
    title: string;
  };
}

const PromptCard = ({ 
  title, 
  content, 
  author, 
  tags, 
  category, 
  likes, 
  comments, 
  copies,
  remixes,
  timeAgo,
  isBookmarked = false,
  isLiked = false,
  remixedFrom
}: PromptCardProps) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [copyCount, setCopyCount] = useState(copies);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setCopyCount(copyCount + 1);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <article className="glass-card p-6 mb-4 transition-all duration-300 hover:shadow-glow hover:scale-[1.01] max-w-2xl mx-auto border-l-4 border-l-primary/30">
      {/* Remix Thread Indicator */}
      {remixedFrom && (
        <div className="flex items-center space-x-2 mb-3 text-sm text-muted-foreground font-inter">
          <RotateCcw className="w-4 h-4" />
          <span>Remixed from <span className="text-accent font-medium">@{remixedFrom.author}</span></span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center border-2 border-primary/20">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-medium text-foreground font-inter text-lg">@{author}</h3>
            <div className="flex items-center space-x-2">
              <Badge 
                variant="secondary" 
                className="text-xs bg-glass-medium text-primary font-inter"
              >
                {category}
              </Badge>
              <span className="text-xs text-muted-foreground font-inter">{timeAgo}</span>
            </div>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setBookmarked(!bookmarked)}
          className={`opacity-70 hover:opacity-100 transition-all duration-200 ${
            bookmarked ? 'text-accent scale-110' : 'text-muted-foreground'
          }`}
        >
          <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
        </Button>
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-sora font-semibold text-foreground mb-3 leading-tight hover:text-primary transition-colors cursor-pointer">
        {title}
      </h2>

      {/* Prompt Preview */}
      <div className="bg-glass-subtle border border-glass-border rounded-xl p-4 mb-4 relative overflow-hidden hover:bg-glass-medium transition-all duration-300">
        <p className="text-foreground/90 text-sm md:text-base leading-relaxed line-clamp-3 font-inter">
          {content}
        </p>
        <div className="absolute bottom-2 right-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
            <span className="text-xs text-primary">✨</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="text-xs bg-glass-subtle border-glass-border text-muted-foreground hover:bg-glass-medium hover:text-accent transition-all duration-200 cursor-pointer font-inter"
          >
            #{tag.toLowerCase().replace(/\s+/g, '')}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6 text-sm text-muted-foreground font-inter">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-2 hover:text-accent transition-colors group ${
              liked ? 'text-accent' : ''
            }`}
          >
            <Heart className={`w-5 h-5 group-hover:scale-110 transition-transform ${liked ? 'fill-current animate-pulse' : ''}`} />
            <span className="font-medium">{likeCount}</span>
          </button>
          
          <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">{comments}</span>
          </div>
          
          <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
            <RotateCcw className="w-5 h-5" />
            <span className="font-medium">{remixes}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className={`border-glass-border hover:bg-glass-medium transition-all duration-200 font-inter font-medium ${
              copied ? 'bg-success/20 text-success border-success/30 scale-105' : 'hover:scale-105'
            }`}
          >
            <Copy className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : `Copy (${copyCount})`}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="border-glass-border hover:bg-glass-medium hover:text-accent transition-all duration-200 hover:scale-105 font-inter font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Remix
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PromptCard;