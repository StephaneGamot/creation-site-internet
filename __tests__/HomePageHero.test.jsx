/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import HomePageHero from '@/components/Heros/HomePageHero';
import { NextIntlClientProvider } from 'next-intl';

const messages = {
  heroTitle: "Bienvenue sur mon site web",
  heroSubtitle: "Je crée des sites modernes et SEO-friendly.",
};

describe('HomePageHero', () => {
  it('affiche le titre et le sous-titre', () => {
    render(
      <NextIntlClientProvider locale="fr" messages={messages}>
        <HomePageHero />
      </NextIntlClientProvider>
    );

    expect(screen.getByRole('heading', { name: messages.heroTitle })).toBeInTheDocument();
    expect(screen.getByText(messages.heroSubtitle)).toBeInTheDocument();
  });

  it('passe les tests d’accessibilité (WCAG)', async () => {
    const { container } = render(
      <NextIntlClientProvider locale="fr" messages={messages}>
        <HomePageHero />
      </NextIntlClientProvider>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
