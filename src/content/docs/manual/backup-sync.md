---
title: Backup, sync and sharing
description: "Backup, sync and sharing — Collectarr user manual"
---

## Local-first data

Entries live in your local database. Core supplies catalog metadata. Personal sync is a separate optional service. Saved local data does not depend on an online catalog request succeeding.

A browser profile has its own storage. Clearing site data, switching profiles or using a private session can produce a different/empty library. Back up before clearing storage.

## Backup / Restore

Open **Backup / Restore** or **Settings → Data** and choose **Backup to JSON**. Use **Restore from JSON** for a saved database backup. Keep its file outside the application's storage. Before restoring, read the dialog and back up the current library too.

A CSV report is not a full backup. Use the backup workflow for recovery.

## Personal sync

**Settings → Connection** configures the metadata and personal sync services independently. Follow your deployment's pairing/account controls. Inspect sync state/history before switching devices or clearing local data; signing into Core alone is not personal synchronization.

## Sharing

Open **Cloud Sharing** or the relevant Share action and review scope/settings. Sharing requires the configured service and account capability.

Inspect what is exposed before publishing a share, including notes, purchase information and personal photos. Do not assume private fields are excluded without checking the actual sharing controls.
