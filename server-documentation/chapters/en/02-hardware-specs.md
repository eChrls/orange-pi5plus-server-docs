# 2. Hardware choice

## Why this hardware and not another option

The decision was based on a simple goal: build a personal server that can run 24/7, handle real self-hosting workloads, and keep electricity cost under control.

Three key points drove the choice:

- Enough memory for multiple services running at the same time.
- Fast and large storage for personal cloud use.
- Low average power draw for continuous operation.

In practice, that means an ARM64 platform with 16 GB RAM and a 1 TB NVMe SSD.

## Requirements defined before buying

Before selecting hardware, minimum practical requirements were set to avoid short-term bottlenecks.

| Area    | Recommended requirement     | Why it matters                                                   |
| ------- | --------------------------- | ---------------------------------------------------------------- |
| CPU     | 8 ARM64 cores or equivalent | Handle parallel services and background tasks                    |
| RAM     | 16 GB                       | Self-hosting + smart-home + custom apps without early saturation |
| Storage | 1 TB NVMe                   | Personal cloud, backups, media, and growth                       |
| Network | Gigabit Ethernet or higher  | Stable remote access and transfers                               |
| Power   | Low for 24/7 usage          | Lower monthly cost and lower sustained heat                      |

## What each component contributes

### ARM64 CPU

A modern ARM64 CPU gives a strong balance between performance and efficiency.

For this type of server, that means:

- Good response in containers and web services.
- Lower sustained heat than higher-consumption alternatives.
- Better long-term energy cost.

### 16 GB RAM

The main reason for 16 GB was to avoid bottlenecks once multiple services coexist.

Typical workload split (illustrative, fictional values used for sizing example):

| Block                     | Approximate RAM |
| ------------------------- | --------------- |
| Base system               | 1.5 to 2.5 GB   |
| Infrastructure containers | 2 to 4 GB       |
| Database + cache          | 1.5 to 3 GB     |
| Application services      | 2 to 4 GB       |
| Operating margin          | 2 to 4 GB       |

Recommendation: measure your real usage with monitoring tools instead of using these numbers as final production values.

### 1 TB NVMe SSD

A 1 TB NVMe SSD was selected to keep enough real margin for mixed usage:

- Personal cloud files, for example with Nextcloud.
- Application data.
- Temporary local backups.
- Media libraries and working files.

Compared with slower storage, the improvement is visible in:

- Service startup times.
- Database response latency.
- Sync and backup operations.

## Quick comparison of common options

| Option             | Main advantage            | Main drawback                          | Fit for this project |
| ------------------ | ------------------------- | -------------------------------------- | -------------------- |
| High-end ARM64 SBC | Excellent 24/7 efficiency | More initial manual setup              | High                 |
| x86 mini PC        | Broad compatibility       | Higher continuous power and cost       | Medium               |
| Commercial NAS     | Easy integration          | Less flexibility for custom stacks     | Medium               |
| Cloud VPS          | No local hardware         | Monthly cost and less physical control | Medium               |

The final choice prioritizes full control, practical learning, and reasonable long-term energy use.

## 24/7 power and cost: how to estimate

To estimate yearly power usage:

$$
	ext{kWh/year} = \frac{\text{Average W} \times 24 \times 365}{1000}
$$

$$
	ext{Yearly cost} = \text{kWh/year} \times \text{price per kWh}
$$

Fictional comparison example:

- Device A: 12 W average.
- Device B: 50 W average.
- Electricity price: 0.20 per kWh.

Approximate result:

- Device A: 105.12 kWh/year -> 21.02 per year.
- Device B: 438.00 kWh/year -> 87.60 per year.

Over multiple years, this difference becomes a major part of the decision.

## Software aligned with this hardware profile

With this hardware baseline, it is realistic to run a stack such as:

- Personal cloud: Nextcloud.
- Smart home: Home Assistant.
- Secure remote access: VPN.
- Web publishing with containerized services.
- Streaming and media catalog services.
- Administration and monitoring tools.

You do not need to deploy everything at once. The recommended path is phased rollout with stability checks at each step.

## Recommended step-by-step method for choosing similar hardware

1. Define real use cases for the next 12-24 months.
2. Size RAM based on concurrency, not single-service usage.
3. Size storage for data and backups, not only OS footprint.
4. Calculate yearly power cost before purchasing.
5. Confirm official OS support for your architecture.
6. Verify ARM64 Docker image availability for planned services.

## Practical precautions

- Do not size hardware only to boot services; size it to operate with margin.
- Do not rely on isolated benchmarks without realistic workload checks.
- Do not assume universal compatibility; validate each target service on ARM64.
- Do not publish hardware inventories with sensitive environment identifiers.

## Where to read more

- Official hardware datasheets from the vendor.
- Official Ubuntu Server ARM64 documentation.
- Official Docker documentation and each service's official docs.

If a third-party guide conflicts with official docs, prioritize official documentation and controlled testing in your own environment.
