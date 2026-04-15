# 7. FAQ and troubleshooting reference

## Chapter goal

This chapter collects common issues that may appear in a self-hosting server and a structured way to resolve them.

It does not describe the current state of a specific environment. It is a practical reference guide.

## Recommended method when something fails

1. Confirm the real symptom.
2. Identify the affected layer (network, proxy, application, database, system).
3. Check logs for that layer.
4. Apply one fix at a time.
5. Validate outcome before the next change.
6. Document cause and solution.

## FAQ 1: Service does not work over HTTPS

### Symptom

- Domain responds over HTTP or fails on HTTPS.

### Common causes

- Certificate not issued or expired.
- DNS points to wrong destination.
- Incomplete proxy routing rule.

### What to check

- Reverse proxy status.
- Certificate status.
- DNS resolution.
- HTTP to HTTPS redirection.

### Typical resolution

1. Confirm DNS target.
2. Confirm router/NAT.
3. Review proxy route/rule.
4. Trigger certificate issuance retry.
5. Validate certificate and redirect.

## FAQ 2: Container keeps restarting

### Symptom

- Continuous restarting state.

### Common causes

- Invalid configuration.
- Wrong volume permissions.
- Missing dependency (for example database).

### What to check

- Container logs.
- Healthcheck result.
- Volume mounts.
- Required environment variables.

### Typical resolution

1. Fix configuration error.
2. Recreate the service.
3. Validate internal health endpoint.
4. Validate proxy-level access.

## FAQ 3: Works internally but not externally

### Symptom

- Service responds locally but not from the internet.

### Common causes

- Port not published or not forwarded.
- Firewall blocking.
- DNS not updated.

### What to check

- Firewall rules.
- Router NAT rules.
- External DNS resolution.
- Service listening on expected port.

### Typical resolution

1. Verify required open ports.
2. Review NAT forwarding.
3. Trigger dynamic DNS update if needed.
4. Repeat external check.

## FAQ 4: Database accidentally exposed

### Symptom

- Database port accessible from unexpected networks.

### Common cause

- Port published in compose file or opened by mistake.

### Typical resolution

1. Remove external port publication.
2. Keep database in private internal network only.
3. Verify firewall rules.
4. Confirm access only from authorized services.

## FAQ 5: Failure after image update

### Symptom

- Service stops responding after updating image.

### Common causes

- Incompatible version change.
- Required data migration not applied.
- New environment variable not defined.

### Typical resolution

1. Roll back to previous stable version.
2. Review official changelog.
3. Apply required environment/config changes.
4. Retry in controlled maintenance window.

## FAQ 6: Resource usage out of control

### Symptom

- CPU, RAM, or disk usage keeps growing.

### Common causes

- Logs growing without rotation.
- Service looping on errors.
- Missing limits or maintenance routines.

### Typical resolution

1. Identify responsible process/container.
2. Review logs and rotation policy.
3. Adjust limits and restart behavior.
4. Add scheduled maintenance tasks.

## Quick recovery checklist

- Critical service is running.
- HTTPS access is operational.
- Certificate is valid.
- Data is intact and persistent.
- No sensitive ports are publicly exposed.
- No repeated critical errors in logs.

## Recommendations to prevent recurrence

- Keep changes small and traceable.
- Version configuration files.
- Create backups before relevant changes.
- Test backup restoration regularly.
- Avoid automations you cannot audit.

## Note on sample values

Any domain, IP, user, port, path, or credential used in this guide examples is fictional.

For real values, use official documentation for each tool and validate with inspection commands in your own environment.
