import { SearchIcon } from "@/ui/icon/SearchIcon";

export default function SearchForm({}) {
  return (
    <>
      <div className="relative">
        <SearchIcon className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-500" />
        <input
          type="text"
          className="border rounded-lg pl-10 text-amber-700"
          aria-label="検索"
        />
      </div>
    </>
  );
}
