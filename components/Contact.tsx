import { EMAIL_ADDRESS } from "../lib/constants";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Text } from "./Text";

export const Contact = () => {
  return (
    <section className="flex flex-col">
      <Heading>Contact 💌</Heading>
      <Text>
        For more serious matters{" "}
        <LinkTag href={`mailto:${EMAIL_ADDRESS}`}>shoot me an email</LinkTag>.
      </Text>
    </section>
  );
};
