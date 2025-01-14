import WikiApi from "../lib/wikiApi";
import Item from "./components/item";
type Props = {
  params: {
    search: string;
  };
};
export const dynamic = "force-dynamic";

export default async function SearchWiki({ params: { search } }: Props) {
  try {
    const wikiData: Promise<SearchResult> = await WikiApi(search);
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages;

    const answer = results ? (
      Object.values(results).map((result) => (
        <div
          key={result.pageid}
          className="p-4 border-2 border-gray-300 rounded-lg shadow-md mb-4 hover:bg-gray-100"
        >
          <Item result={result} />
        </div>
      ))
    ) : (
      <p className="text-center text-lg text-red-500">{`${search} not found`}</p>
    );

    return <div className="m-14">{answer}</div>;
  } catch (error) {
    console.error(error);
  }
}
