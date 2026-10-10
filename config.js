/* تنظیمات اختیاری کلاسینو — وقتی سرور خودتان را خریدید فقط همین فایل را عوض کنید.
window.CLASSINO_CONFIG = {
  // سرور سیگنالینگ PeerJS خودتان (npm i -g peer && peerjs --port 9000 --path /classino)
  peer: { host: 'meet.example.ir', port: 443, path: '/classino', secure: true },
  // سرور STUN/TURN خودتان (coturn) — برای شبکه‌هایی که اتصال مستقیم را مسدود می‌کنند
  iceServers: [
    { urls: 'stun:turn.example.ir:3478' },
    { urls: ['turn:turn.example.ir:3478', 'turns:turn.example.ir:5349'], username: 'classino', credential: 'رمز-قوی' }
  ]
};
*/
