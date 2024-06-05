document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
  
    if (commentForm) {
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const comment_text = document.getElementById('comment_text').value.trim();
        const post_id = window.location.pathname.split('/').pop();
  
        if (comment_text) {
          const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.reload();
          } else {
            alert('Failed to add comment');
          }
        }
      });
    }
  });
  