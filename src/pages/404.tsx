import Button from "@/components/elements/button/Button";
import CustomHeading from "@/components/elements/text/CustomHeading";
import { CupIcon2 } from "@/ui/icon/CupIcon-2";

export default function Custom404() {
  return (
    <div className="text-center flex flex-col space-y-2 items-center justify-center">
      <p>
        <CupIcon2
          width={144}
          height={144}
          className="mx-auto text-amber-400"
        />
      </p>
      <CustomHeading tag="h1">Page Not Found</CustomHeading>
      <p>
        We apologize, but the page you are looking for may
        no longer exist.
      </p>
      <p>
        The page you are looking for may not exist or may
        have been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          color="primary"
          onClick={() => window.history.back()}
          className="w-[260px]"
        >
          Prev Page
        </Button>
        <Button
          color="secondary"
          onClick={() => (window.location.href = "/")}
          className="w-[260px]"
        >
          Home
        </Button>
      </div>
    </div>
  );
}
