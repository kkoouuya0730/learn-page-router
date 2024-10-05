import { Review } from "@/types/review";
import Star from "./parts/Star";

type Props = {
  score: 0 | 1 | 2 | 3 | 4 | 5;
};

/**
 * 0~5段階で星をつける
 * 各星はFill or not Fillの見た目を持つ
 */
export default function ReviewScore({ score }: Props) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (score - i > 0) {
        stars.push(<Star fill key={i} />);
      } else {
        stars.push(<Star />);
      }
    }
    return stars;
  };
  return (
    <div className="container">
      <div className="flex space-x-1 items-center">
        {renderStars()}
        <span>{score}</span>
        <span>/</span>
        <span>5</span>
      </div>
    </div>
  );
}
