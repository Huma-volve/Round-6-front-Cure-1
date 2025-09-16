import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type GoBackButtonProps = {
  size: number;
};

function GoBackButton({ size }: GoBackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="Go back"
      onClick={() => navigate(-1)}
      className="cursor-pointer hover:scale-120 transition-transform"
    >
      <ChevronLeft strokeWidth={1.3} size={size} />
    </button>
  );
}

export default GoBackButton;
