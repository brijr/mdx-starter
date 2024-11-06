import { Main, Section, Container } from "@/components/craft";

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Main>
      <Section>
        <Container>{children}</Container>
      </Section>
    </Main>
  );
}
