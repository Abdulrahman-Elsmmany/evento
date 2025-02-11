import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="flex flex-wrap max-w-[1100px] justify-center mx-auto px-[20px] py-24 gap-20">
      {/* <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard /> */}

      {
        // This is the same as the above code, but with a different syntax
        Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      }
    </div>
  );
}
