import {
  Button, Heading, Provider, SSRProvider, View,
  defaultTheme,
} from "@adobe/react-spectrum";

export default function Home() {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>
        <View margin="size-150">
          <Heading level={1}>React Spectrum in Next.js</Heading>
          <Button>React Spectrum Button</Button>
        </View>
      </Provider>
    </SSRProvider>
  );
}
