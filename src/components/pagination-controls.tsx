import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btnClasses =
  "text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 text-sm";

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnClasses}>
          <ArrowLeftIcon /> Previous
        </Link>
      ) : (
        <div></div>
      )}

      {nextPath ? (
        <Link href={nextPath} className={btnClasses}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
        <div></div>
      )}
    </section>
  );
}
