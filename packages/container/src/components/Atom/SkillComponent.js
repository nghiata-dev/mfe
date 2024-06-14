import React from "react";

export default function SkillComponent({
  src = "https://sagarshah.dev/_next/static/media/icon-typescript.0f2fa2a9.svg",
  name,
}) {
  return (
    <Box sx={{ gap: "8px", marginBottom: "8px", display: "block" }}>
      <Box as={"img"} src={src} />
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
}
