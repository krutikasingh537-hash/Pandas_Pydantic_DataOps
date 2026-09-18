function checkCorsHeaders(headers) {
  const allowOrigin = headers['access-control-allow-origin'];
  const allowCredentials = headers['access-control-allow-credentials'];
  if (allowOrigin === '*' && allowCredentials === 'true') {
    return { safe: false, reason: 'Wildcard origin with credentials enabled allows cross-origin credential theft.' };
  }
  return { safe: true };
}

module.exports = { checkCorsHeaders };
