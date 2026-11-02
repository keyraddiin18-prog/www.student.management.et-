// js/supabase-client.js
(function () {
  "use strict";

  var SUPABASE_URL  = "https://ygvfnvlqjewjrhuwugxl.supabase.co";
  var SUPABASE_ANON = "sb_publishable_bqV6R66IYJvsupE8rrYuIA_2Mhdee10";

  if (!window.supabase) {
    console.error("Supabase library hin fe'amne.");
    return;
  }

  window.KEYRA_DB = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
})();