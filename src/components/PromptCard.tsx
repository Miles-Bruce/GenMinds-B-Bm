
import { Copy, Bookmark, MessageCircle, Plus, User, Heart } from "lucide-react";
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
  timeAgo: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
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
  timeAgo,
  isBookmarked = false,
  isLiked = false 
}: PromptCardProps) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="glass-card p-6 mb-6 transition-all duration-300 hover:shadow-glow hover:scale-[1.02] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{author}</h3>
            <div className="flex items-center space-x-2">
              <Badge 
                variant="secondary" 
                className="text-xs bg-glass-medium text-primary"
              >
                {category}
              </Badge>
              <span className="text-xs text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setBookmarked(!bookmarked)}
          className={`opacity-70 hover:opacity-100 transition-opacity ${
            bookmarked ? 'text-accent' : 'text-muted-foreground'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
        </Button>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {title}
      </h2>

      {/* Prompt Preview */}
      <div className="bg-glass-subtle border border-glass-border rounded-lg p-4 mb-4 relative overflow-hidden">
        <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3">
          {content}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="text-xs bg-glass-subtle border-glass-border text-muted-foreground hover:bg-glass-medium transition-colors cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-1 hover:text-accent transition-colors ${
              liked ? 'text-accent' : ''
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            <span>{likeCount}</span>
          </button>
          
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-4 h-4" />
            <span>{comments}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Copy className="w-4 h-4" />
            <span>{copies}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className={`border-glass-border hover:bg-glass-medium transition-all ${
              copied ? 'bg-success/20 text-success border-success/30' : ''
            }`}
          >
            <Copy className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : 'Copy'}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="border-glass-border hover:bg-glass-medium hover:text-accent transition-all"
          >
            <Plus className="w-4 h-4 mr-2" />
            Remix
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
