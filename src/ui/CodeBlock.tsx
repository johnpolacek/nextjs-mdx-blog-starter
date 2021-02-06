import React from "react"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"

const CodeBlock: React.FC<{ className?: string; children: any }> = ({
  children,
  className,
}) => {
  const language: Language = (className
    ? className.replace(/language-/, "")
    : "javascript") as Language
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={github}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "20px", marginBottom: "32px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
