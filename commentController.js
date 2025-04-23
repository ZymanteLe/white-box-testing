function isValidComment(text) {
    const forbiddenChars = /["';.()%]/;
    return (
      typeof text === "string" &&
      text.length >= 3 &&
      text.length <= 300 &&
      !forbiddenChars.test(text)
    );
  }
  
  function isValidSecurityRating(score) {
    return Number.isInteger(score) && score >= 1 && score <= 10;
  }
  
  function submitComment(req, res) {
    const { text, securityRating } = req.body;
  
    if (!isValidComment(text)) {
      return res.status(400).json({ message: "Invalid comment text" });
    }
  
    if (!isValidSecurityRating(securityRating)) {
      return res.status(400).json({ message: "Invalid security rating" });
    }
  
    // Save comment (mock)
    const savedComment = { text, securityRating };
    return res.status(201).json({ message: "Comment saved", data: savedComment });
  }
  
  module.exports = { submitComment, isValidComment, isValidSecurityRating };
  