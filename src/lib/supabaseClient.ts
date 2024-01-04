import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://nsccvdjgainhdemxgpeg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zY2N2ZGpnYWluaGRlbXhncGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyOTg0NzEsImV4cCI6MjAxOTg3NDQ3MX0.xjaHV1UVeepU2uGNgCn-9T8xfJG7KBqk2LY9nvraWU4"
);
