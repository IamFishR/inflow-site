import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";
import { Steps } from "@/components/Steps";

export const metadata: Metadata = {
  title: "AI skill pack",
  description:
    "How to use InFlow’s public AI skill pack with inflow-db.json. Prompts and SKILL.md — not a hosted model.",
};

export default function SkillsGuidePage() {
  return (
    <DocPage
      slug="skills"
      title="AI skill pack"
      lead="A shareable pack of prompts and a SKILL.md that teaches an agent to work with your vault file. You attach inflow-db.json. You run the model. InFlow does not."
    >
      <DocSection title="What it is">
        <p>
          Files you can download from the{" "}
          <Link href="/skills" className="text-zinc-200 hover:underline">
            skill pack page
          </Link>
          : <Code>SKILL.md</Code> (agent instructions), <Code>schema.md</Code>{" "}
          (vault shape), <Code>prompts.md</Code> (copy-paste), and a zip of
          all three.
        </p>
        <p>
          It is not an InFlow chatbot, not an API, and not a model we host.
          Schema fields for a future partner layer stay empty in this app
          release.
        </p>
      </DocSection>

      <DocSection title="How to use it">
        <Steps
          items={[
            "Get a copy of inflow-db.json — from Google Drive (InFlow/inflow-db.json) or from a backup ZIP. That file is yours; treat it as sensitive.",
            "Install SKILL.md in Claude / Cursor / Codex / Grok skills, or paste a prompt from the pack into ChatGPT or any chat that accepts file attachments.",
            "Attach the JSON. Ask for a weekly review, inbox triage, recall, or a schema-safe patch.",
            "Read the answer. If you want edits in the app, apply them yourself (or merge a proposed JSON) — then let InFlow sync as usual.",
          ]}
        />
      </DocSection>

      <DocSection title="What the skill is allowed to do">
        <ul className="list-disc space-y-2 pl-5">
          <li>Read collections: folders, views, entries, tags, types</li>
          <li>Quote titles and ids that exist in the file</li>
          <li>Suggest workspace moves and existing tags</li>
          <li>Propose new entry objects that match the schema</li>
          <li>Emit a patch or diff, not a silent rewrite of the whole vault</li>
        </ul>
      </DocSection>

      <DocSection title="What it must not do">
        <ul className="list-disc space-y-2 pl-5">
          <li>Invent entries, workspaces, or “memories” that are not in the file</li>
          <li>Hard-delete rows or Drive attachment ids</li>
          <li>
            Write vectors or embeddings into <Code>inflow-db.json</Code>
          </li>
          <li>Bump <Code>schemaVersion</Code> or drop unknown keys</li>
          <li>Claim that InFlow ran the model</li>
        </ul>
      </DocSection>

      <DocSection title="Attachments">
        <p>
          The JSON holds metadata (<Code>mediaFileId</Code>, mime, duration).
          Photo, voice, and video bytes live in{" "}
          <Code>InFlow/attachments/</Code> or on the device. A model that only
          has the JSON cannot watch the video. Export a backup ZIP if you also
          want those files in the same folder — still your copy, still not
          uploaded to us.
        </p>
      </DocSection>
    </DocPage>
  );
}
