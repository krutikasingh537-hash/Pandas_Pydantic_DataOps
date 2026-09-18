function auditToken(rawJwt) {
  const parts = rawJwt.split('.');
  if (parts.length !== 3) {
    return [{ rule: 'MALFORMED', severity: 'HIGH', message: 'Token must have 3 segments' }];
  }
  const issues = [];
  try {
    const header = JSON.parse(Buffer.from(parts[0], 'base64').toString('utf8'));
    if (header.alg === 'none' || header.alg === 'None') {
      issues.push({ rule: 'NONE_ALGORITHM', severity: 'CRITICAL', message: 'Unsecured none algorithm detected' });
    }
  } catch (e) {
    issues.push({ rule: 'INVALID_HEADER', severity: 'HIGH', message: e.message });
  }
  return issues;
}

module.exports = { auditToken };
