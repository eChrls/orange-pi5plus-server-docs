# 4. Security baseline

## Chapter goal

This chapter defines a realistic security baseline for a personal server running in continuous production.

The goal is simple: reduce attack surface, limit the impact of mistakes, and keep operations stable without making the system unmanageable.

## Security approach

Security is applied in layers:

1. Secure administrative access.
2. Minimal network exposure.
3. Automated protection against abuse attempts.
4. Encryption for public traffic.
5. Periodic operational reviews.

## Recommended tools by objective

| Objective                     | Recommended tool           | When to use it                                  | Level        |
| ----------------------------- | -------------------------- | ----------------------------------------------- | ------------ |
| Block brute-force attempts    | Fail2Ban                   | Always when remote admin or public panels exist | Baseline     |
| Reduce network attack surface | Host firewall              | Always, from day one                            | Baseline     |
| Encrypt public traffic        | TLS on reverse proxy       | Always for published web services               | Baseline     |
| Scan known malware            | ClamAV (scheduled scan)    | Recommended when users upload files             | Intermediate |
| Filter complex web attacks    | WAF (example: ModSecurity) | When public forms or high abuse risk exist      | Advanced     |

Practical note:

- For an initial self-hosting setup, baseline usually means: firewall + Fail2Ban + HTTPS.
- As traffic and exposure increase, adding a WAF becomes more relevant.

## Layer 1: administrative access

### Recommendation

- Use key-based authentication for remote administration.
- Disable password-based admin access on exposed services.
- Limit administrative privileges to required users only.

### Step-by-step

1. Generate keys on client device.
2. Register public key on server.
3. Verify key access before applying stricter hardening.
4. Apply SSH hardening.
5. Restart service and validate real access.

### Precaution

Never close the current session until new access is confirmed.

## Layer 2: network control

### Baseline rule

Default policy: deny inbound and allow only required ports.

### Policy example (fictional values)

```text
Inbound: denied by default
Outbound: allowed by default
Allow only:
- SSH_ADMIN_PORT/tcp
- 80/tcp
- 443/tcp
```

### Step-by-step

1. Set default policies.
2. Open only required service ports.
3. Enable firewall logging.
4. Verify effective rules.

### Precaution

Do not expose internal admin tools publicly for convenience.

## Layer 3: brute-force protection

### Recommendation

Configure automatic temporary blocking for repeated failed attempts on critical services.

Common tool: Fail2Ban.

### Typical parameters (fictional example)

| Parameter | Example value |
| --------- | ------------- |
| maxretry  | 3             |
| findtime  | 10 minutes    |
| bantime   | 2 hours       |

### Step-by-step

1. Start with admin access protection only.
2. Confirm correct log source is being read.
3. Test ban and unban in controlled conditions.
4. Review service status periodically.

### Precaution

Keep local management ranges properly excluded to avoid locking out legitimate access.

### How to implement it safely

1. Protect administrative access first.
2. Start with short temporary bans and review false positives.
3. Tune thresholds gradually.
4. Extend to other services only when logs are well understood.

This order reduces real risk without breaking legitimate operations.

## Layer 4: HTTPS and certificates

### Recommendation

Every public service should be delivered over HTTPS with valid certificates and automatic renewal.

### Operational flow

1. Reverse proxy receives public traffic.
2. It requests or renews certificates automatically.
3. It redirects HTTP to HTTPS.
4. It applies recommended security headers.

Common tools for this layer:

- Dynamic proxy with auto TLS: Traefik.
- Proxy with visual panel: Nginx Proxy Manager.

How to choose:

- Choose Traefik if you deploy with containers and prefer label-based automation.
- Choose Nginx Proxy Manager if you prefer visual management and simpler manual setup.

### Minimum validations

- Domain responds over HTTPS.
- HTTP redirects to HTTPS.
- Certificate is not expired.
- Trust chain is valid.

## Layer 5: operational hygiene

### Weekly checks

- Firewall status.
- Brute-force protection status.
- Certificates close to expiration.
- Critical services running.
- Disk and log growth.

If you use ClamAV, also check:

- Last scheduled scan execution.
- Last report summary.
- False positives affecting app directories.

### Monthly checks

- Security updates.
- Exposed ports review.
- Backup restore test.
- Account and permissions review.

## Baseline security checklist

- Key-based administrative access enabled.
- Password-based admin access disabled on exposed services.
- Restrictive firewall policy active.
- Only required ports exposed.
- Automated brute-force protection active.
- Public services available over HTTPS.
- Certificate renewal automated.
- Security/event logging enabled and reviewed.

## Common mistakes and how to avoid them

1. Hardening SSH before validating fallback access.
2. Opening temporary ports and forgetting them.
3. Configuring HTTPS once and never reviewing renewal.
4. Assuming protection is active without log validation.
5. Not documenting security changes.

## Final recommendations

- Start with simple, consistent controls.
- Automate only what you can understand and audit.
- Change one thing at a time and validate immediately.
- Keep a dated change log with reason and outcome.

## Suggested stack by maturity level

### Baseline level (recommended start)

- Host firewall.
- Fail2Ban for administrative access.
- Reverse proxy with HTTPS.
- Tested backups.

### Intermediate level

- ClamAV scheduled scanning.
- Health and security alerts.
- Finer per-service rules.

### Advanced level

- WAF (for example ModSecurity) in front of public services.
- Stricter network segmentation.
- Formal periodic security review process.

## Note on fictional values

Any sample domain, IP, user, port, or path shown in this chapter is fictional.

To set real values, follow each tool's official documentation and validate with inspection commands in your own environment.
