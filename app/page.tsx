import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <Main className="p-12">
      <Section>
        <Container>
          <h1>
            <Balancer>Hello World!</Balancer>
          </h1>
          <p>
            Welcome to the{" "}
            <a href="https://github.com/brijr/craft-starter">Craft Starter</a>{" "}
            by <a href="https://bridger.to">Bridger Tower</a>. This Next JS
            template has been set up based on the recommended{" "}
            <a
              className="underline"
              href="https://ui.shadcn.com/docs/installation/next"
            >
              Shadcn/ui Next.js setup
            </a>
            .
          </p>
          <ExampleJsx />
        </Container>
      </Section>
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <article>
      <h2>Example Heading</h2>
      <p>
        This is an example paragraph to illustrate what an article section might
        look like in this context. You can add more content here to expand on
        the topic and provide more detailed information to your readers.
      </p>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
      <h3>This is an example H3</h3>
      <p>
        Further explore the topic by discussing relevant points, providing
        insights, or sharing experiences that can engage the audience. An
        article is not just about listing information but also about
        storytelling and conveying a message that resonates with the readers.
      </p>
      <pre>
        <code>
          {`// This is an example code block
function exampleFunction() {
  console.log("This is a code snippet.");
}`}
        </code>
      </pre>
      <p>
        Lastly, you may want to conclude with a summary or a call-to-action that
        encourages readers to take the next steps, such as learning more about a
        subject or getting involved in a community discussion.
      </p>
    </article>
  );
};
