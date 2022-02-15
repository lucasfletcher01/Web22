const TeamMember = document.querySelector('.TeamMembers');
TeamMember.classList.remove('TeamAnimation');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
TeamMember.classList.add('TeamAnimation');
  return;
}
  TeamMember.classList.remove('TeamAnimation');
});
});

observer.observe(document.querySelector('.TeamWrapper'));
