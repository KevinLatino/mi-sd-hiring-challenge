export function showLoading(message, elementId) {
  const contentElement = document.getElementById(elementId);
  contentElement.innerHTML = `<div class="status-banner">${message}</div>`;
}

export function showError(message, elementId ) {
  const contentElement = document.getElementById(elementId);
  contentElement.innerHTML = `<div class="error-banner">Error: ${message}</div>`;
}
