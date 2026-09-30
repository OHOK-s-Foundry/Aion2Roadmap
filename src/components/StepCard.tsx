import { useState } from "react";
import type { Block, Item } from "@/data/roadmap";

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return <p>{block.text}</p>;
    case "h":
      return <h4>{block.text}</h4>;
    case "ul":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "note":
      return <blockquote className="quote">{block.text}</blockquote>;
    case "code":
      return <pre className="code">{block.text}</pre>;
  }
}

export function StepCard({
  item,
  index,
  done,
  current,
  onToggle,
}: {
  item: Item;
  index: number;
  done: boolean;
  current: boolean;
  onToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const label = item.step ? String(item.step).padStart(2, "0") : String(index + 1).padStart(2, "0");

  return (
    <article
      className={`card${done ? " is-done" : ""}${current && !done ? " is-current" : ""}`}
      id={item.id}
    >
      <div className="card-head" role="group">
        <span className="node" aria-hidden="true">
          {item.step ? label : "•"}
        </span>
        <button
          type="button"
          className={`check${done ? " on" : ""}`}
          aria-pressed={done}
          aria-label={
            done ? `Mark "${item.title}" as not completed` : `Mark "${item.title}" as completed`
          }
          onClick={onToggle}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 12.5l5 5L20 6.5" />
          </svg>
        </button>
        <button
          type="button"
          className="card-main"
          style={{
            background: "none",
            border: 0,
            cursor: "pointer",
            textAlign: "left",
            padding: 0,
          }}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <h3 className="card-title">
            {item.step ? <span className="badge">Step {item.step}</span> : null}
            <span>{item.title}</span>
            <span className="badges">
              {item.tag ? <span className="badge">{item.tag}</span> : null}
              {item.milestone ? <span className="badge badge-milestone">Milestone</span> : null}
              {item.optional ? <span className="badge badge-optional">Optional</span> : null}
              {current && !done ? <span className="badge badge-milestone">Current</span> : null}
            </span>
          </h3>
          <p className="card-summary">{item.summary}</p>
        </button>
        <span className={`chev${open ? " open" : ""}`} aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </div>

      <div className={`panel${open ? " open" : ""}`}>
        <div className="panel-inner">
          <div className="panel-body">
            {item.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
