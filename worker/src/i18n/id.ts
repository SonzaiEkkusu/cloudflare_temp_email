import { LocaleMessages } from "./type";

const messages: LocaleMessages = {
    CustomAuthPasswordMsg: "Anda telah mengaktifkan kata sandi situs pribadi, silakan berikan kata sandi",
    UserTokenExpiredMsg: "Token Anda telah kedaluwarsa, silakan masuk kembali",
    UserAcceesTokenExpiredMsg: "Token akses Anda telah kedaluwarsa, silakan muat ulang halaman",
    UserRoleIsNotAdminMsg: "Peran pengguna Anda bukan administrator, akses ditolak",
    NeedAdminPasswordMsg: "Anda perlu memberikan kata sandi administrator untuk mengakses halaman ini",

    KVNotAvailableMsg: "KV tidak tersedia, silakan hubungi administrator",
    DBNotAvailableMsg: "DB tidak tersedia, silakan hubungi administrator",
    JWTSecretNotSetMsg: "JWT_SECRET belum diatur, silakan hubungi administrator",
    WebhookNotEnabledMsg: "Webhook belum diaktifkan, silakan hubungi administrator",
    DomainsNotSetMsg: "Daftar domain belum diatur, silakan hubungi administrator",

    TurnstileCheckFailedMsg: "Pemeriksaan verifikasi manusia gagal",
    NewAddressDisabledMsg: "Pembuatan alamat email baru dinonaktifkan, silakan hubungi administrator",
    NewAddressAnonymousDisabledMsg: "Pembuatan alamat email baru oleh pengguna anonim dinonaktifkan, silakan hubungi administrator",
    FailedCreateAddressMsg: "Gagal membuat alamat email",
    InvalidAddressMsg: "Alamat email tidak valid",
    InvalidAddressCredentialMsg: "Kredensial alamat email tidak valid",
    UserDeleteEmailDisabledMsg: "Penghapusan email oleh pengguna dinonaktifkan, silakan hubungi administrator",

    UserNotFoundMsg: "Pengguna tidak ditemukan",
    UserAlreadyExistsMsg: "Pengguna sudah ada, silakan masuk",
    FailedToRegisterMsg: "Gagal mendaftar",
    UserRegistrationDisabledMsg: "Pendaftaran pengguna dinonaktifkan, silakan hubungi administrator",
    UserMailDomainMustInMsg: "Domain email pengguna harus ada dalam daftar ini",
    InvalidVerifyCodeMsg: "Kode verifikasi tidak valid",
    InvalidEmailOrPasswordMsg: "Email atau kata sandi tidak valid",
    VerifyMailSenderNotSetMsg: "Email pengirim verifikasi belum diatur, silakan hubungi administrator",
    CodeAlreadySentMsg: "Kode verifikasi sudah dikirim, harap tunggu sebentar",
    InvalidUserDefaultRoleMsg: "Peran default pengguna tidak valid, silakan hubungi administrator",
    FailedUpdateUserDefaultRoleMsg: "Gagal memperbarui peran default pengguna, silakan hubungi administrator",

    Oauth2ClientIDNotFoundMsg: "ID Klien Oauth2 belum diatur, silakan hubungi administrator",
    Oauth2CliendIDOrCodeMissingMsg: "ID Klien Oauth2 atau kode hilang",
    Oauth2FailedGetUserInfoMsg: "Gagal mendapatkan informasi pengguna dari penyedia Oauth2",
    Oauth2FailedGetAccessTokenMsg: "Gagal mendapatkan token akses dari penyedia Oauth2",
    Oauth2FailedGetUserEmailMsg: "Gagal mendapatkan email pengguna dari penyedia Oauth2",

    PasswordChangeDisabledMsg: "Perubahan kata sandi dinonaktifkan",
    NewPasswordRequiredMsg: "Kata sandi baru tidak boleh kosong",
    InvalidAddressTokenMsg: "Token alamat tidak valid",
    FailedUpdatePasswordMsg: "Gagal memperbarui kata sandi",
    PasswordLoginDisabledMsg: "Masuk dengan kata sandi dinonaktifkan",
    EmailPasswordRequiredMsg: "Email dan kata sandi tidak boleh kosong",
    AddressNotFoundMsg: "Alamat email tidak ditemukan",

    // Common messages (merged similar ones)
    OperationFailedMsg: "Operasi gagal",
    RequiredFieldMsg: "Bidang wajib diisi hilang",
    InvalidInputMsg: "Input tidak valid",

    // Address related
    NameTooShortMsg: "Nama terlalu pendek",
    NameTooLongMsg: "Nama terlalu panjang",
    InvalidDomainMsg: "Domain tidak valid",
    AddressAlreadyExistsMsg: "Alamat email sudah ada",
    MaxAddressCountReachedMsg: "Batas jumlah alamat maksimum tercapai",
    AddressNotBindedMsg: "Alamat email belum terikat",
    AddressAlreadyBindedMsg: "Alamat email sudah terikat, silakan lepaskan ikatan terlebih dahulu",
    TargetUserNotFoundMsg: "Pengguna target tidak ditemukan",

    // Send mail related
    NoBalanceMsg: "Saldo tidak mencukupi",
    AddressBlockedMsg: "Alamat telah diblokir",
    SubjectEmptyMsg: "Subjek tidak boleh kosong",
    ContentEmptyMsg: "Konten tidak boleh kosong",
    AlreadyRequestedMsg: "Sudah diminta",
    EnableResendOrSmtpMsg: "Harap aktifkan resend atau smtp untuk domain ini terlebih dahulu",
    EnableResendOrSmtpWithVerifiedMsg: "Harap aktifkan resend atau smtp untuk domain ini terlebih dahulu, atau tambahkan penerima ke daftar alamat yang diverifikasi",
    InvalidToMailMsg: "Alamat penerima tidak valid",

    // Admin related
    InvalidAddressIdMsg: "address_id tidak valid",
    EnableKVMsg: "Harap aktifkan KV terlebih dahulu",
    EnableSendMailMsg: "Harap aktifkan SEND_MAIL terlebih dahulu",
    InvalidCleanupConfigMsg: "cleanType atau cleanDays tidak valid",
    InvalidCleanTypeMsg: "cleanType tidak valid",
    EnableKVForMailVerifyMsg: "Jika ingin mengaktifkan verifikasi email, harap aktifkan KV terlebih dahulu",
    VerifyMailDomainInvalidMsg: "Domain pengirim email verifikasi harus ada di",
    InvalidMaxAddressCountMsg: "maxAddressCount tidak valid",
    FailedDeleteUserMsg: "Gagal menghapus pengguna",
    InvalidUserIdMsg: "user_id tidak valid",
    InvalidRoleTextMsg: "role_text tidak valid",

    // SQL validation
    SqlEmptyMsg: "Pernyataan SQL kosong",
    SqlTooLongMsg: "Pernyataan SQL terlalu panjang (maksimal 1000 karakter)",
    SqlOnlyDeleteMsg: "Hanya pernyataan DELETE yang diizinkan",
    SqlSingleStatementMsg: "Hanya satu pernyataan SQL yang diizinkan",
    SqlNoCommentsMsg: "Komentar SQL tidak diizinkan",

    // Passkey related
    InvalidPasskeyNameMsg: "Nama passkey tidak valid",
    PasskeyNotFoundMsg: "Passkey tidak ditemukan",
    AuthenticationFailedMsg: "Otentikasi gagal",
    RegistrationFailedMsg: "Pendaftaran gagal",

    // Auto reply related
    AutoReplyDisabledMsg: "Balasan otomatis dinonaktifkan",
    InvalidAutoReplyMsg: "Subjek atau pesan tidak valid",
    SubjectOrMessageTooLongMsg: "Subjek atau pesan terlalu panjang",

    // Bind address related
    NoAddressOrUserTokenMsg: "Alamat atau token pengguna hilang",
    InvalidAddressOrUserTokenMsg: "Alamat atau token pengguna tidak valid",

    // Pagination related
    InvalidLimitMsg: "Parameter limit tidak valid",
    InvalidOffsetMsg: "Parameter offset tidak valid",

    // Clear inbox/sent items related
    FailedClearInboxMsg: "Gagal membersihkan kotak masuk",
    FailedClearSentItemsMsg: "Gagal membersihkan item terkirim",

    // Webhook related
    WebhookNotAllowedForUserMsg: "Pengguna ini tidak diizinkan menggunakan pengaturan Webhook",

    // IP blacklist related
    InvalidIpBlacklistSettingMsg: "Pengaturan daftar hitam IP tidak valid",
    BlacklistExceedsMaxSizeMsg: "Daftar hitam melebihi batas entri maksimum",

    // Telegram bot messages
    TgUnableGetUserInfoMsg: "Tidak dapat mengambil informasi pengguna",
    TgNoPermissionMsg: "Anda tidak memiliki izin untuk menggunakan bot ini",
    TgWelcomeMsg: "Selamat datang di bot ini!",
    TgCurrentPrefixMsg: "Awalan yang diaktifkan saat ini:",
    TgCurrentDomainsMsg: "Domain yang tersedia saat ini:",
    TgAvailableCommandsMsg: "Silakan gunakan perintah berikut:",
    TgCreateSuccessMsg: "Berhasil membuat alamat:",
    TgCreateFailedMsg: "Gagal membuat alamat:",
    TgBindSuccessMsg: "Berhasil mengikat:",
    TgBindFailedMsg: "Gagal mengikat:",
    TgUnbindSuccessMsg: "Berhasil melepaskan ikatan:",
    TgUnbindFailedMsg: "Gagal melepaskan ikatan:",
    TgDeleteSuccessMsg: "Berhasil menghapus:",
    TgDeleteFailedMsg: "Gagal menghapus:",
    TgAddressListMsg: "Daftar alamat:",
    TgGetAddressFailedMsg: "Gagal mendapatkan daftar alamat:",
    TgCleanSuccessMsg: "Berhasil membersihkan alamat tidak valid:",
    TgCurrentAddressListMsg: "Daftar alamat saat ini:",
    TgCleanFailedMsg: "Gagal membersihkan alamat tidak valid:",
    TgNotBoundAddressMsg: "Alamat ini tidak terikat:",
    TgInvalidAddressMsg: "Alamat tidak valid",
    TgNoMoreMailsMsg: "Tidak ada email lagi",
    TgNoMailMsg: "Tidak ada email",
    TgGetMailFailedMsg: "Gagal mendapatkan email:",
    TgParseMailFailedMsg: "Gagal mengurai email:",
    TgViewMailBtnMsg: "Lihat Email",
    TgPrevBtnMsg: "Sebelumnya",
    TgNextBtnMsg: "Selanjutnya",
    TgPleaseInputCredentialMsg: "Silakan masukkan kredensial",
    TgPleaseInputAddressMsg: "Silakan masukkan alamat",
    TgAddressMsg: "Alamat:",
    TgPasswordMsg: "Kata Sandi:",
    TgCredentialMsg: "Kredensial:",
    TgNoSenderMsg: "Tanpa Pengirim",
    TgMsgTooLongMsg: "Pesan terlalu panjang...",
    TgParseFailedViewInAppMsg: "Gagal mengurai...",
    TgMaxAddressReachedMsg: "Jumlah alamat terikat telah mencapai batas",
    TgMaxAddressReachedCleanMsg: "Jumlah alamat terikat telah mencapai batas, silakan /cleaninvalidaddress terlebih dahulu",
    TgInvalidCredentialMsg: "Kredensial tidak valid",
    TgAddressNotYoursMsg: "Alamat ini bukan milik Anda",
    TgLangSetSuccessMsg: "Bahasa berhasil diatur:",
    TgCurrentLangMsg: "Bahasa saat ini:",
    TgSelectLangMsg: "Silakan pilih bahasa:",
    TgNoPermissionViewMailMsg: "Tidak ada izin untuk melihat email ini",
    TgBotTokenRequiredMsg: "TELEGRAM_BOT_TOKEN perlu diatur",
    TgLangFeatureDisabledMsg: "Fitur pengaturan bahasa dinonaktifkan, menggunakan bahasa default sistem",
}

export default messages;