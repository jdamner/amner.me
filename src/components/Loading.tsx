import { Container } from "@/components/Layouts";
import Spinner from "@/components/Atoms/Spinner";

export default function Loading() {
  return (
    <Container className="flex justify-center items-center py-20">
      <div className="flex flex-col items-center gap-4">
        <Spinner className="text-orange-600" />
        <p className="text-gray-600 text-sm">Loading...</p>
      </div>
    </Container>
  );
}
