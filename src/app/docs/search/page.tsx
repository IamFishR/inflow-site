import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Search & recall",
  description:
    "Find notes again in InFlow with search, filters, reading states, related entries, and optional AI recall against inflow-db.json.",
};

export default function SearchGuidePage() {
  return (
    <DocPage
      slug="search"
      title="Search & recall"
      lead="The point of a second brain is getting the thing back. InFlow search is in the app. An AI pass is optional, and you run it on a file you already have."
    >
      <DocSection title="In the app">
        <p>
          Search is a primary tab. Filters for type, reading status, and tags
          live in one sheet — not a permanent chip row. A badge shows when a
          filter is on.
        </p>
        <p>
          Reading states on clips: Unread, Reading, Done, Reference. Related
          entries surface from <Code>relatedEntryIds</Code>. Soft-deleted
          items are hidden from lists and search until you restore them from
          Trash.
        </p>
      </DocSection>

      <DocSection title="Saved views as recall">
        <p>
          A rule view is a standing question: “unread articles in Reading”,
          “tasks due this week”. You are not copying those entries into a new
          pile. See{" "}
          <Link href="/docs/organize" className="text-zinc-200 hover:underline">
            organize
          </Link>
          .
        </p>
      </DocSection>

      <DocSection title="AI recall (optional)">
        <p>
          InFlow does not embed your vault or call a model. If you want a
          natural-language pass:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Export or copy{" "}
            <Code>inflow-db.json</Code> from Drive or a backup ZIP. That file
            is notes metadata — not attachment bytes.
          </li>
          <li>
            Load the{" "}
            <Link href="/skills" className="text-zinc-200 hover:underline">
              skill pack
            </Link>{" "}
            in the AI tool you already use.
          </li>
          <li>
            Attach the JSON and ask. The recall prompt searches titles,
            content, tags, and source titles in the file. It should not guess
            from general knowledge.
          </li>
        </ol>
        <p>
          Treat the JSON as sensitive if it contains personal notes. You
          choose which model sees it. We do not receive that copy.
        </p>
      </DocSection>

      <DocSection title="What recall is not">
        <p>
          Not semantic search inside the app. Not a hosted index. Reserved
          fields <Code>aiSummary</Code>, <Code>aiEntities</Code>,{" "}
          <Code>embeddingId</Code>, <Code>lastAiRunAt</Code> exist so a future
          partner layer can land without redesigning the vault. This release
          does not fill them. Do not store vectors in{" "}
          <Code>inflow-db.json</Code>.
        </p>
      </DocSection>
    </DocPage>
  );
}
