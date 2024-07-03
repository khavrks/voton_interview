"use client"
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./config";
import { RainbowKitProvider, Locale } from "@rainbow-me/rainbowkit";
import { useRouter } from 'next/router';

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
});


export const WagmiProviderLayout = ({ children }) => {

    const { locale } = useRouter();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={config.chains} locale={locale}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
