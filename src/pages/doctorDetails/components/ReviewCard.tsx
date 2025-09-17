import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

function ReviewCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 font-medium">
            <p className="text-primary-200">Nabila Reyna</p>
            <p className="text-secondary-600">30 min ago</p>
          </div>
        </CardTitle>
        <CardDescription className="w-fit px-2 py-1 rounded-md bg-yellow-50 text-warning-100 flex items-center gap-1">
          <Star className="fill-warning-100 text-warning-100" size={20} />
          <span className="font-semibold text-lg">4.5</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-secondary-500 font-medium">
          Excellent service! Dr. Jessica Turner was attentive and thorough. The
          clinic was clean, and the staff were friendly. Highly recommend for
          in-person care!
        </p>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
