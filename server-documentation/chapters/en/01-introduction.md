# 1. Introduction and goals

## What this guide is

This documentation explains, in a practical way and from scratch, how to build a personal self-hosting server on low-power ARM64 hardware.

The guide is designed for beginners and for anyone interested in understanding a real working flow: hardware choice, architecture, security, containers, and deployment.

## Why this project

The main goal is to build a stable 24/7 platform to:

- Learn infrastructure and operations through real use cases.
- Publish personal projects without relying fully on third-party platforms.
- Centralize personal services, such as private cloud storage.
- Test new applications without breaking the base environment.

## Design criteria

The solution is based on four priorities:

1. Enough performance for multiple concurrent services.
2. Controlled power consumption for continuous operation.
3. Simple scalability to grow in stages.
4. Clear, documented, and reproducible maintenance.

## Hardware choice summary

Choosing an ARM64 board with 16 GB RAM and a 1 TB NVMe SSD answers specific needs:

- Enough memory to run multiple self-hosting, smart-home, and custom app workloads without saturating the system.
- Fast storage and enough capacity for personal cloud use cases.
- Lower energy cost compared with alternatives that typically consume more in 24/7 operation.

Security note: this chapter avoids identifiable production details. When specific technical values appear, they are fictional examples.

## What can be built on a platform like this

Common software and use-case examples:

- Personal cloud: Nextcloud.
- Smart home: Home Assistant.
- Secure remote access: VPN.
- Multimedia: local or remote streaming.
- Web publishing: static sites or containerized applications.
- Operations and observability: container management panel and monitoring.

## Scope of this guide

This guide focuses on what is needed for a first functional and secure version.

Included:

- Goal-driven hardware decisions.
- Base architecture to separate services and data.
- Initial security hardening.
- Docker-based deployment and maintenance.
- HTTPS publishing with operational best practices.

## Structure of the next chapters

- Chapter 2: hardware choice and cost/performance analysis.
- Chapter 3: system architecture and service flow.
- Chapter 4: security baseline and recommended controls.
- Chapter 5: Docker and service management.
- Chapter 6: deployment/self-hosting step by step and final validation.
- Appendix: common errors and resolution (reference troubleshooting).

## Recommendations before continuing

- Read each chapter fully before running commands.
- Keep a change log with date, reason, and outcome.
- Apply changes in small blocks and validate each step.
- Use official documentation for critical commands.

## Important precautions

- Do not publish credentials, tokens, keys, or private paths.
- Do not copy technical examples into production without review.
- Do not expose ports or services without justification and control.
- Do not treat sample values in this guide as production defaults.

## Note on fictional values

When later chapters include examples of domains, IPs, users, ports, or credentials, those values are fictional to avoid leaks.

To obtain real values in your own environment, follow each tool's official documentation and validate using your system's inspection commands.
