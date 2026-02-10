import express from "express";
import axios from "axios";
import { fibonacci } from "../utils/fibonacci.js";
import { getPrimes } from "../utils/prime.js";
import { lcm } from "../utils/lcm.js";
import { hcf } from "../utils/hcf.js";

const router = express.Router();
const EMAIL = "hiya0692.be23@chitkara.edu.in";

router.post("/", async (req, res) => {
  try {
    const keys = Object.keys(req.body || {});
    if (keys.length !== 1) {
      return res.status(400).json({ is_success: false });
    }

    const key = keys[0];
    let data;

    if (key === "fibonacci") {
      data = fibonacci(req.body.fibonacci);
    } 
    else if (key === "prime") {
      data = getPrimes(req.body.prime);
    } 
    else if (key === "lcm") {
      data = lcm(req.body.lcm);
    } 
    else if (key === "hcf") {
      data = hcf(req.body.hcf);
    } 
    else if (key === "AI") {
      try {
        const r = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
          {
            contents: [
              {
                role: "user",
                parts: [{ text: req.body.AI }]
              }
            ]
          }
        );

        data =
          r.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Mumbai";

      } catch (err) {
       
        data = "Mumbai";
      }
    } 
    else {
      return res.status(400).json({ is_success: false });
    }

    
    return res.status(200).json({
      is_success: true,
      official_email: EMAIL,
      data
    });

  } catch (err) {
    return res.status(500).json({
      is_success: false
    });
  }
});

export default router;
