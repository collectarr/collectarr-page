import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
  site: process.env.SITE_URL || 'https://collectarr.github.io',
  base: process.env.SITE_BASE ?? '/collectarr-site',
  integrations: [starlight({
    title: 'Collectarr',
    description: 'The Collectarr user manual: one guide for all your collections.',
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'Collectarr on GitHub', href: 'https://github.com/collectarr/collectarr-app' }],
    sidebar: [
      { label: 'Start here', items: [ { label: 'Welcome', slug: 'manual' }, { label: 'Getting started', slug: 'manual/getting-started' } ] },
      { label: 'Your library', items: [
        { label: 'Adding items', slug: 'manual/adding' }, { label: 'Editing & personal data', slug: 'manual/editing' },
        { label: 'Collections & status', slug: 'manual/collections' }, { label: 'Browse, search & filter', slug: 'manual/browsing' },
        { label: 'Columns & sorting', slug: 'manual/columns-sorting' }, { label: 'Inspector & images', slug: 'manual/images' },
        { label: 'Pick lists & folders', slug: 'manual/pick-lists' }, { label: 'Custom fields', slug: 'manual/custom-fields' },
      ] },
      { label: 'Tools & settings', items: [
        { label: 'Duplicates & index numbers', slug: 'manual/duplicates-index' }, { label: 'Loans & statistics', slug: 'manual/loans-statistics' },
        { label: 'Transfer field data', slug: 'manual/transfer-field-data' }, { label: 'Import, export & print', slug: 'manual/import-export' },
        { label: 'Backup, sync & sharing', slug: 'manual/backup-sync' }, { label: 'Settings & shortcuts', slug: 'manual/settings' },
        { label: 'Troubleshooting', slug: 'manual/troubleshooting' },
      ] },
      { label: 'By kind', items: [{ autogenerate: { directory: 'manual/kinds' } }] },
    ],
  })],
});
