// ========================================
// SECUREVAULT INTERNATIONALIZATION (i18n)
// JavaScript-based approach - no HTML changes needed
// ========================================

const translations = {
    en: {
        // ===== PAGE TITLE & META =====
        pageTitle: "SecureVault - Password Manager",
        
        // ===== COMMON =====
        appName: "SecureVault",
        poweredBy: "Powered by Equinox",
        passwordManager: "Password Manager",
        cancel: "Cancel",
        close: "Close",
        back: "Back",
        next: "Next",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        import: "Import",
        export: "Export",
        done: "Done",
        change: "Change",
        remove: "Remove",
        share: "Share",
        install: "Install",
        installed: "Installed",
        or: "or",

        // View Entry Modal
        viewEntryTitle: 'Entry Details',
        usernameEmail: 'Username / Email',
        password: 'Password',
        website: 'Website',
        notes: 'Notes',
        lastModified: 'Last Modified',
        deleteBtn: 'Delete',
        closeBtn: 'Close',
        editBtn: 'Edit',
        
        // ===== LOCK SCREEN =====
        lockSubtitle: "Enter your master password to unlock",
        masterPasswordPlaceholder: "Master Password",
        unlockVault: "Unlock Vault",
        unlockWithBiometrics: "Unlock with Biometrics",
        forgotPassword: "Forgot your password?",
        noVaultYet: "Don't have a vault yet?",
        createNew: "Create New",
        
        // ===== SETUP WIZARD =====
        createYourVault: "Create Your Vault",
        setupDescription: "Choose a strong master password to protect your passwords",
        configureSettings: "Configure Settings",
        configureDescription: "Customize your security preferences",
        version: "Version",
        versionHint: "Increment if password was compromised",
        masterPassword: "Master Password",
        enterMasterPassword: "Enter master password",
        confirmPassword: "Confirm Password",
        confirmMasterPassword: "Confirm master password",
        passwordRequirements: "Minimum 8 characters. Use a mix of letters, numbers, and symbols.",
        passwordHintOptional: "Password Hint (Optional)",
        passwordHintPlaceholder: "Something to help you remember",
        passwordHintDescription: "This hint will be shown if you forget your password",
        continue: "Continue",
        importExistingVault: "Import Existing Vault",
        importDragText: "Click or drag your vault-data.json file here",
        createVault: "Create Vault",
        
        // ===== TIMEOUT OPTIONS =====
        oneMinute: "1 minute",
        fiveMinutes: "5 minutes",
        fifteenMinutes: "15 minutes",
        thirtyMinutes: "30 minutes",
        oneHour: "1 hour",
        never: "Never",
        fifteenSeconds: "15 seconds",
        thirtySeconds: "30 seconds",
        
        // ===== AUTO-LOCK & CLIPBOARD =====
        autoLockTimeout: "Auto-Lock Timeout",
        autoLockHint: "Automatically lock the vault after inactivity",
        clipboardClear: "Clipboard Clear",
        clipboardHint: "Automatically clear clipboard after copying passwords",
        lockVaultAfterInactivity: "Lock vault after inactivity",
        clearClipboardAfterCopying: "Clear clipboard after copying",
        
        // ===== SIDEBAR NAVIGATION =====
        main: "Main",
        allItems: "All Items",
        favorites: "Favorites",
        categories: "Categories",
        settings: "Settings",
        exportBackup: "Export Backup",
        lockVault: "Lock Vault",
        
        // ===== CATEGORIES =====
        catSocial: "Social",
        catBanking: "Banking",
        catEmail: "Email",
        catWork: "Work",
        catShopping: "Shopping",
        catTravel: "Travel",
        catEntertainment: "Entertainment",
        catHealth: "Health",
        catEducation: "Education",
        catOther: "Other",
        
        // ===== SEARCH & HEADER =====
        searchPlaceholder: "Search passwords...",
        toggleTheme: "Toggle Theme",
        addEntry: "Add Entry",
        
        // ===== SORT OPTIONS =====
        sortNameAsc: "Name (A-Z)",
        sortNameDesc: "Name (Z-A)",
        sortNewest: "Newest First",
        sortOldest: "Oldest First",
        sortCategory: "Category",
        
        // ===== ENTRY COUNT =====
        passwordCount: "{count} passwords",
        passwordCountOne: "1 password",
        passwordsStored: "{count} passwords stored",
        passwordStoredOne: "1 password stored",
        
        // ===== EMPTY STATES =====
        noPasswordsYet: "No passwords yet",
        addFirstPassword: "Add your first password to get started",
        noResultsFound: "No results found",
        tryDifferentSearch: "Try a different search term",
        noFavoritesYet: "No favorites yet",
        starImportantPasswords: "Star your important passwords to find them here",
        noCategoryPasswords: "No passwords in this category",
        addNewToStart: "Add a new entry to get started",
        
        // ===== ENTRY MODAL =====
        addNewEntry: "Add New Entry",
        editEntry: "Edit Entry",
        title: "Title",
        titlePlaceholder: "e.g., Facebook",
        category: "Category",
        usernameEmail: "Username / Email",
        usernamePlaceholder: "username or email@example.com",
        password: "Password",
        enterPassword: "Enter password",
        showHide: "Show/Hide",
        generatePasswordTitle: "Generate Password",
        websiteUrl: "Website URL",
        urlPlaceholder: "https://example.com",
        notes: "Notes",
        notesPlaceholder: "Additional information...",
        addToFavorites: "Add to Favorites",
        saveEntry: "Save Entry",
        
        // ===== PASSWORD GENERATOR =====
        passwordGenerator: "Password Generator",
        clickToGenerate: "Click generate to create password",
        useThisPassword: "Use This Password",
        random: "Random",
        regeneratable: "Regeneratable",
        passwordLength: "Password Length",
        uppercase: "Uppercase (A-Z)",
        lowercase: "Lowercase (a-z)",
        numbers: "Numbers (0-9)",
        symbols: "Symbols (!@#$%)",
        
        // ===== VIEW ENTRY MODAL =====
        entryDetails: "Entry Details",
        website: "Website",
        lastModified: "Last Modified",
        copy: "Copy",
        regenerate: "Regenerate",
        open: "Open",
        noUsername: "No username",
        removeFromFavorites: "Remove from favorites",
        addToFavoritesTitle: "Add to favorites",
        copyPassword: "Copy Password",
        
        // ===== DELETE MODAL =====
        deleteEntry: "Delete Entry",
        deleteConfirm: "Are you sure you want to delete",
        thisEntry: "this entry",
        cannotBeUndone: "This action cannot be undone.",
        
        // ===== SETTINGS MODAL =====
        shareSecureVault: "Share SecureVault",
        inviteOthers: "Invite others to use this app",
        quickAccess: "Quick Access",
        installApp: "Install App",
        addToHomeScreen: "Add to home screen for quick access",
        bookmarklet: "Bookmarklet",
        bookmarkletDesc: "Drag this to your bookmarks bar for quick access from any site",
        copyCode: "Copy Code",
        vaultUrl: "Vault URL (for bookmarklet)",
        vaultUrlHint: "Enter the URL where your vault is hosted, or leave blank for current location",
        security: "Security",
        changeMasterPassword: "Change Master Password",
        updateVaultPassword: "Update your vault password",
        biometricUnlock: "Biometric Unlock",
        biometricDesc: "Use fingerprint or Windows Hello to unlock",
        removeBiometricData: "Remove Biometric Data",
        removeBiometricDesc: "Disable biometrics and remove stored credentials",
        appearance: "Appearance",
        darkMode: "Dark Mode",
        darkModeDesc: "Use dark color scheme",
        dataManagement: "Data Management",
        exportVault: "Export Vault",
        exportDesc: "Download encrypted backup file",
        importVault: "Import Vault",
        importDesc: "Restore from backup file",
        deleteAllData: "Delete All Data",
        deleteAllDesc: "Permanently delete vault and all passwords",
        deleteAll: "Delete All",
        help: "Help",
        viewTutorial: "View Tutorial",
        tutorialDesc: "Learn how to use SecureVault",
        showTutorial: "Show Tutorial",
        about: "About",
        offlinePasswordManager: "Offline Password Manager",
        encryption: "Encryption",
        encryptionType: "AES-256-GCM via Web Crypto API",
        totalEntries: "Total Entries",
        
        // ===== CHANGE PASSWORD MODAL =====
        currentPassword: "Current Password",
        enterCurrentPassword: "Enter current password",
        newPassword: "New Password",
        enterNewPassword: "Enter new password",
        confirmNewPassword: "Confirm New Password",
        confirmNewPasswordPlaceholder: "Confirm new password",
        changePasswordBtn: "Change Password",
        
        // ===== DELETE ALL MODAL =====
        deleteAllDataTitle: "Delete All Data",
        willPermanentlyDelete: "This will permanently delete:",
        allSavedPasswords: "All saved passwords",
        allSettings: "All settings",
        yourMasterPassword: "Your master password",
        typeDeleteConfirm: "Type \"DELETE\" to confirm",
        deleteEverything: "Delete Everything",
        
        // ===== FORGOT PASSWORD MODAL =====
        forgotPasswordTitle: "Forgot Password",
        yourPasswordHint: "Your Password Hint",
        cantRememberPassword: "Can't remember your password?",
        vaultEncryptedWarning: "Your vault is encrypted and cannot be recovered without the master password.",
        usedRegenerator: "Used Regenerator?",
        regeneratorReminder: "Remember: Your master password is part of the recipe. Use the same master password after reset to regenerate your passwords.",
        haveExportFile: "Have an export file?",
        exportFileAdvice: "Reset the vault, create a new master password, then import your backup.",
        resetWarning: "⚠️ Resetting will delete all locally stored passwords.",
        iRememberNow: "I Remember Now",
        resetVault: "Reset Vault",
        
        // ===== PASSWORD STRENGTH =====
        strengthWeak: "Weak",
        strengthFair: "Fair",
        strengthGood: "Good",
        strengthStrong: "Strong",
        
        // ===== TOAST MESSAGES =====
        toastWelcomeBack: "Welcome Back",
        toastVaultUnlocked: "Vault unlocked successfully",
        toastVaultLocked: "Vault Locked",
        toastVaultLockedMsg: "Your vault has been locked",
        toastAutoLocked: "Auto-Locked",
        toastAutoLockedMsg: "Vault locked due to inactivity",
        toastVaultCreated: "Vault Created",
        toastVaultCreatedMsg: "Your secure vault is ready to use",
        toastSettingsSaved: "Settings Saved",
        toastSettingsSavedMsg: "Your preferences have been updated",
        toastPasswordChanged: "Password Changed",
        toastPasswordChangedMsg: "Your master password has been updated",
        toastDataDeleted: "Data Deleted",
        toastDataDeletedMsg: "All vault data has been removed",
        toastEntryUpdated: "Entry Updated",
        toastEntryUpdatedMsg: "\"{title}\" has been updated",
        toastEntryAdded: "Entry Added",
        toastEntryAddedMsg: "\"{title}\" has been added",
        toastEntryDeleted: "Entry Deleted",
        toastEntryDeletedMsg: "\"{title}\" has been deleted",
        toastAddedToFavorites: "Added to Favorites",
        toastRemovedFromFavorites: "Removed from Favorites",
        toastPasswordApplied: "Password Applied",
        toastPasswordAppliedMsg: "Generated password has been set",
        toastCopied: "{label} Copied",
        toastClipboardClear: "Clipboard will clear in {seconds}s",
        toastCopiedSuccess: "Copied successfully",
        toastCopyFailed: "Copy Failed",
        toastCopyFailedMsg: "Could not copy to clipboard",
        toastClipboardCleared: "Clipboard Cleared",
        toastClipboardClearedMsg: "For your security",
        toastExportComplete: "Export Complete",
        toastExportCompleteMsg: "Vault backup saved successfully",
        toastExportDownloaded: "Vault backup downloaded",
        toastExportFailed: "Export Failed",
        toastExportFailedMsg: "Could not export vault",
        toastNoVaultData: "No vault data found",
        toastImportComplete: "Import Complete",
        toastImportCompleteMsg: "Enter your master password to unlock",
        toastImportFailed: "Import Failed",
        toastImportFailedMsg: "Could not read vault file",
        toastInvalidFile: "Invalid File",
        toastInvalidFileMsg: "This is not a valid vault backup",
        toastVaultLockedFirst: "Unlock the vault first",
        toastPasswordVerified: "Password Verified",
        toastPasswordVerifiedMsg: "Regenerated password matches stored",
        toastPasswordDiffers: "Password Differs",
        toastPasswordDiffersMsg: "Stored password was not generated deterministically",
        toastVaultReset: "Vault Reset",
        toastVaultResetMsg: "Your vault has been reset.",
        toastSaveFailed: "Save Failed",
        toastSaveFailedMsg: "Could not save vault data",
        
        // ===== VALIDATION MESSAGES =====
        pleaseEnterPassword: "Please enter your password",
        noVaultFound: "No vault found",
        incorrectPassword: "Incorrect password",
        failedToUnlock: "Failed to unlock vault",
        pleaseEnterAPassword: "Please enter a password",
        passwordMinLength: "Password must be at least 8 characters",
        passwordsDoNotMatch: "Passwords do not match",
        failedToCreateVault: "Failed to create vault",
        validationError: "Validation Error",
        titleRequired: "Title is required",
        passwordRequired: "Password is required",
        allFieldsRequired: "All fields are required",
        newPasswordMinLength: "New password must be at least 8 characters",
        newPasswordsNoMatch: "New passwords do not match",
        currentPasswordIncorrect: "Current password is incorrect",
        failedToChangePassword: "Failed to change password",
        confirmationRequired: "Confirmation Required",
        typeDeleteToConfirm: "Type DELETE to confirm",
        
        // ===== BIOMETRIC MESSAGES =====
        biometricNotAvailable: "Not available (requires HTTPS and compatible device)",
        biometricEnabled: "Biometric unlock is enabled",
        biometricUseRemoveBtn: "Use Remove Button",
        biometricClickRemove: "Click \"Remove\" to disable biometrics",
        biometricEnterPassword: "Enter your master password to enable biometrics:",
        biometricError: "Error",
        biometricWrongPassword: "Wrong Password",
        biometricWrongPasswordMsg: "Could not verify master password",
        biometricFailed: "Biometrics Failed",
        biometricFailedMsg: "Could not register biometric credential",
        biometricEnabledToast: "Biometrics Enabled",
        biometricEnabledMsg: "You can now unlock with fingerprint or Windows Hello",
        biometricSetupFailed: "Setup Failed",
        biometricSetupFailedMsg: "Could not enable biometrics",
        biometricNotConfigured: "Not Configured",
        biometricNotConfiguredMsg: "Biometrics not set up",
        biometricVerifyFailed: "Verification Failed",
        biometricVerifyFailedMsg: "Biometric verification was not completed",
        biometricKeyError: "Key Error",
        biometricKeyErrorMsg: "Could not retrieve stored credentials",
        biometricVaultError: "Vault Error",
        biometricDecryptFailed: "Decrypt Failed",
        biometricDecryptFailedMsg: "Stored credentials may be outdated",
        biometricUnlockedMsg: "Unlocked with biometrics",
        biometricCancelled: "Cancelled",
        biometricCancelledMsg: "Biometric verification was cancelled",
        biometricUnlockFailed: "Unlock Failed",
        biometricUnlockFailedMsg: "Biometric verification failed",
        biometricRemoveConfirm: "Remove biometric unlock? You will need to use your master password.",
        biometricRemoved: "Biometrics Removed",
        biometricRemovedMsg: "Biometric unlock has been disabled",
        biometricResetNotice: "Biometrics Reset",
        biometricResetMsg: "Please re-enable biometrics with new password",
        
        // ===== PWA MESSAGES =====
        pwaAppInstalled: "App Installed",
        pwaAppInstalledMsg: "SecureVault added to your device",
        pwaInstallManually: "Install Manually",
        pwaInstallManuallyMsg: "Use your browser menu to \"Add to Home Screen\"",
        pwaInstalling: "Installing...",
        pwaInstallingMsg: "SecureVault is being added",
        
        // ===== SHARE MESSAGES =====
        shareThanks: "Thanks!",
        shareThanksMsg: "Thanks for sharing SecureVault",
        shareLinkCopied: "Link Copied",
        shareLinkCopiedMsg: "Share link copied to clipboard",
        shareText: "Check out SecureVault - a free, secure, offline password manager!",
        
        // ===== UPDATE MESSAGES =====
        updateAvailable: "Update available (v{version})",
        refresh: "Refresh",
        
        // ===== BOOKMARKLET MESSAGES =====
        dragMe: "Drag Me",
        dragToBookmarks: "Drag this button to your bookmarks bar",
        bookmarkletCopied: "Bookmarklet code",
        
        // ===== GENERATOR MESSAGES =====
        enterTitleFirst: "Enter a title first",
        selectAtLeastOne: "Select at least one option",
        
        // ===== CONFIRMATION DIALOGS =====
        confirmResetVault: "Are you sure? This will DELETE all locally saved passwords.",
        confirmResetFinal: "FINAL WARNING: This cannot be undone. Continue?",
        
        // ===== JSON FILES =====
        jsonFiles: "JSON Files",
        
        // ===== DATE LOCALE =====
        dateLocale: "en-US"
    },
    
    nl: {
        // ===== PAGE TITLE & META =====
        pageTitle: "SecureVault - Wachtwoordbeheerder",
        
        // ===== COMMON =====
        appName: "SecureVault",
        poweredBy: "Powered by Equinox",
        passwordManager: "Wachtwoordbeheerder",
        cancel: "Annuleren",
        close: "Sluiten",
        back: "Terug",
        next: "Volgende",
        save: "Opslaan",
        delete: "Verwijderen",
        edit: "Bewerken",
        import: "Importeren",
        export: "Exporteren",
        done: "Klaar",
        change: "Wijzigen",
        remove: "Verwijderen",
        share: "Delen",
        install: "Installeren",
        installed: "Geïnstalleerd",
        or: "of",
        
        // ===== LOCK SCREEN =====
        lockSubtitle: "Voer je hoofdwachtwoord in om te ontgrendelen",
        masterPasswordPlaceholder: "Hoofdwachtwoord",
        unlockVault: "Kluis Ontgrendelen",
        unlockWithBiometrics: "Ontgrendel met Biometrie",
        forgotPassword: "Wachtwoord vergeten?",
        noVaultYet: "Nog geen kluis?",
        createNew: "Nieuwe Maken",

        // View Entry Modal
        viewEntryTitle: 'Itemgegevens',
        usernameEmail: 'Gebruikersnaam / E-mail',
        password: 'Wachtwoord',
        website: 'Website',
        notes: 'Notities',
        lastModified: 'Laatst gewijzigd',
        deleteBtn: 'Verwijderen',
        closeBtn: 'Sluiten',
        editBtn: 'Bewerken',
        
        // ===== SETUP WIZARD =====
        createYourVault: "Maak Je Kluis",
        setupDescription: "Kies een sterk hoofdwachtwoord om je wachtwoorden te beschermen",
        configureSettings: "Instellingen Configureren",
        configureDescription: "Pas je beveiligingsvoorkeuren aan",
        version: "Versie",
        versionHint: "Verhoog als wachtwoord gecompromitteerd is",
        masterPassword: "Hoofdwachtwoord",
        enterMasterPassword: "Voer hoofdwachtwoord in",
        confirmPassword: "Bevestig Wachtwoord",
        confirmMasterPassword: "Bevestig hoofdwachtwoord",
        passwordRequirements: "Minimaal 8 tekens. Gebruik een mix van letters, cijfers en symbolen.",
        passwordHintOptional: "Wachtwoordhint (Optioneel)",
        passwordHintPlaceholder: "Iets om je te helpen herinneren",
        passwordHintDescription: "Deze hint wordt getoond als je je wachtwoord vergeet",
        continue: "Doorgaan",
        importExistingVault: "Bestaande Kluis Importeren",
        importDragText: "Klik of sleep je vault-data.json bestand hierheen",
        createVault: "Kluis Maken",
        
        // ===== TIMEOUT OPTIONS =====
        oneMinute: "1 minuut",
        fiveMinutes: "5 minuten",
        fifteenMinutes: "15 minuten",
        thirtyMinutes: "30 minuten",
        oneHour: "1 uur",
        never: "Nooit",
        fifteenSeconds: "15 seconden",
        thirtySeconds: "30 seconden",
        
        // ===== AUTO-LOCK & CLIPBOARD =====
        autoLockTimeout: "Auto-Vergrendeling",
        autoLockHint: "Vergrendel kluis automatisch na inactiviteit",
        clipboardClear: "Klembord Wissen",
        clipboardHint: "Wis klembord automatisch na kopiëren van wachtwoorden",
        lockVaultAfterInactivity: "Vergrendel kluis na inactiviteit",
        clearClipboardAfterCopying: "Wis klembord na kopiëren",
        
        // ===== SIDEBAR NAVIGATION =====
        main: "Hoofdmenu",
        allItems: "Alle Items",
        favorites: "Favorieten",
        categories: "Categorieën",
        settings: "Instellingen",
        exportBackup: "Backup Exporteren",
        lockVault: "Kluis Vergrendelen",
        
        // ===== CATEGORIES =====
        catSocial: "Sociaal",
        catBanking: "Bankieren",
        catEmail: "E-mail",
        catWork: "Werk",
        catShopping: "Winkelen",
        catTravel: "Reizen",
        catEntertainment: "Entertainment",
        catHealth: "Gezondheid",
        catEducation: "Onderwijs",
        catOther: "Overig",
        
        // ===== SEARCH & HEADER =====
        searchPlaceholder: "Zoek wachtwoorden...",
        toggleTheme: "Thema Wisselen",
        addEntry: "Item Toevoegen",
        
        // ===== SORT OPTIONS =====
        sortNameAsc: "Naam (A-Z)",
        sortNameDesc: "Naam (Z-A)",
        sortNewest: "Nieuwste Eerst",
        sortOldest: "Oudste Eerst",
        sortCategory: "Categorie",
        
        // ===== ENTRY COUNT =====
        passwordCount: "{count} wachtwoorden",
        passwordCountOne: "1 wachtwoord",
        passwordsStored: "{count} wachtwoorden opgeslagen",
        passwordStoredOne: "1 wachtwoord opgeslagen",
        
        // ===== EMPTY STATES =====
        noPasswordsYet: "Nog geen wachtwoorden",
        addFirstPassword: "Voeg je eerste wachtwoord toe om te beginnen",
        noResultsFound: "Geen resultaten gevonden",
        tryDifferentSearch: "Probeer een andere zoekterm",
        noFavoritesYet: "Nog geen favorieten",
        starImportantPasswords: "Markeer je belangrijke wachtwoorden om ze hier te vinden",
        noCategoryPasswords: "Geen wachtwoorden in deze categorie",
        addNewToStart: "Voeg een nieuw item toe om te beginnen",
        
        // ===== ENTRY MODAL =====
        addNewEntry: "Nieuw Item Toevoegen",
        editEntry: "Item Bewerken",
        title: "Titel",
        titlePlaceholder: "bijv. Facebook",
        category: "Categorie",
        usernameEmail: "Gebruikersnaam / E-mail",
        usernamePlaceholder: "gebruikersnaam of email@voorbeeld.com",
        password: "Wachtwoord",
        enterPassword: "Voer wachtwoord in",
        showHide: "Tonen/Verbergen",
        generatePasswordTitle: "Wachtwoord Genereren",
        websiteUrl: "Website URL",
        urlPlaceholder: "https://voorbeeld.com",
        notes: "Notities",
        notesPlaceholder: "Extra informatie...",
        addToFavorites: "Aan Favorieten Toevoegen",
        saveEntry: "Item Opslaan",
        
        // ===== PASSWORD GENERATOR =====
        passwordGenerator: "Wachtwoord Generator",
        clickToGenerate: "Klik genereer om wachtwoord te maken",
        useThisPassword: "Dit Wachtwoord Gebruiken",
        random: "Willekeurig",
        regeneratable: "Regenereerbaar",
        passwordLength: "Wachtwoordlengte",
        uppercase: "Hoofdletters (A-Z)",
        lowercase: "Kleine letters (a-z)",
        numbers: "Cijfers (0-9)",
        symbols: "Symbolen (!@#$%)",
        
        // ===== VIEW ENTRY MODAL =====
        entryDetails: "Item Details",
        website: "Website",
        lastModified: "Laatst Gewijzigd",
        copy: "Kopiëren",
        regenerate: "Regenereren",
        open: "Openen",
        noUsername: "Geen gebruikersnaam",
        removeFromFavorites: "Uit favorieten verwijderen",
        addToFavoritesTitle: "Aan favorieten toevoegen",
        copyPassword: "Wachtwoord Kopiëren",
        
        // ===== DELETE MODAL =====
        deleteEntry: "Item Verwijderen",
        deleteConfirm: "Weet je zeker dat je",
        thisEntry: "dit item",
        cannotBeUndone: "Deze actie kan niet ongedaan worden gemaakt.",
        
        // ===== SETTINGS MODAL =====
        shareSecureVault: "SecureVault Delen",
        inviteOthers: "Nodig anderen uit om deze app te gebruiken",
        quickAccess: "Snelle Toegang",
        installApp: "App Installeren",
        addToHomeScreen: "Toevoegen aan startscherm voor snelle toegang",
        bookmarklet: "Bladwijzer",
        bookmarkletDesc: "Sleep dit naar je bladwijzerbalk voor snelle toegang vanaf elke site",
        copyCode: "Code Kopiëren",
        vaultUrl: "Kluis URL (voor bladwijzer)",
        vaultUrlHint: "Voer de URL in waar je kluis gehost wordt, of laat leeg voor huidige locatie",
        security: "Beveiliging",
        changeMasterPassword: "Hoofdwachtwoord Wijzigen",
        updateVaultPassword: "Update je kluis wachtwoord",
        biometricUnlock: "Biometrische Ontgrendeling",
        biometricDesc: "Gebruik vingerafdruk of Windows Hello om te ontgrendelen",
        removeBiometricData: "Biometrische Gegevens Verwijderen",
        removeBiometricDesc: "Schakel biometrie uit en verwijder opgeslagen inloggegevens",
        appearance: "Weergave",
        darkMode: "Donkere Modus",
        darkModeDesc: "Gebruik donker kleurenschema",
        dataManagement: "Gegevensbeheer",
        exportVault: "Kluis Exporteren",
        exportDesc: "Download versleuteld backup bestand",
        importVault: "Kluis Importeren",
        importDesc: "Herstel vanuit backup bestand",
        deleteAllData: "Alle Gegevens Verwijderen",
        deleteAllDesc: "Verwijder kluis en alle wachtwoorden permanent",
        deleteAll: "Alles Verwijderen",
        help: "Help",
        viewTutorial: "Tutorial Bekijken",
        tutorialDesc: "Leer hoe je SecureVault gebruikt",
        showTutorial: "Tutorial Tonen",
        about: "Over",
        offlinePasswordManager: "Offline Wachtwoordbeheerder",
        encryption: "Versleuteling",
        encryptionType: "AES-256-GCM via Web Crypto API",
        totalEntries: "Totaal Items",
        
        // ===== CHANGE PASSWORD MODAL =====
        currentPassword: "Huidig Wachtwoord",
        enterCurrentPassword: "Voer huidig wachtwoord in",
        newPassword: "Nieuw Wachtwoord",
        enterNewPassword: "Voer nieuw wachtwoord in",
        confirmNewPassword: "Bevestig Nieuw Wachtwoord",
        confirmNewPasswordPlaceholder: "Bevestig nieuw wachtwoord",
        changePasswordBtn: "Wachtwoord Wijzigen",
        
        // ===== DELETE ALL MODAL =====
        deleteAllDataTitle: "Alle Gegevens Verwijderen",
        willPermanentlyDelete: "Dit zal permanent verwijderen:",
        allSavedPasswords: "Alle opgeslagen wachtwoorden",
        allSettings: "Alle instellingen",
        yourMasterPassword: "Je hoofdwachtwoord",
        typeDeleteConfirm: "Typ \"DELETE\" om te bevestigen",
        deleteEverything: "Alles Verwijderen",
        
        // ===== FORGOT PASSWORD MODAL =====
        forgotPasswordTitle: "Wachtwoord Vergeten",
        yourPasswordHint: "Je Wachtwoordhint",
        cantRememberPassword: "Kun je je wachtwoord niet herinneren?",
        vaultEncryptedWarning: "Je kluis is versleuteld en kan niet worden hersteld zonder het hoofdwachtwoord.",
        usedRegenerator: "Regenerator gebruikt?",
        regeneratorReminder: "Onthoud: Je hoofdwachtwoord is onderdeel van het recept. Gebruik hetzelfde hoofdwachtwoord na reset om je wachtwoorden te regenereren.",
        haveExportFile: "Heb je een export bestand?",
        exportFileAdvice: "Reset de kluis, maak een nieuw hoofdwachtwoord, en importeer dan je backup.",
        resetWarning: "⚠️ Resetten zal alle lokaal opgeslagen wachtwoorden verwijderen.",
        iRememberNow: "Ik Weet Het Weer",
        resetVault: "Kluis Resetten",
        
        // ===== PASSWORD STRENGTH =====
        strengthWeak: "Zwak",
        strengthFair: "Matig",
        strengthGood: "Goed",
        strengthStrong: "Sterk",
        
        // ===== TOAST MESSAGES =====
        toastWelcomeBack: "Welkom Terug",
        toastVaultUnlocked: "Kluis succesvol ontgrendeld",
        toastVaultLocked: "Kluis Vergrendeld",
        toastVaultLockedMsg: "Je kluis is vergrendeld",
        toastAutoLocked: "Auto-Vergrendeld",
        toastAutoLockedMsg: "Kluis vergrendeld wegens inactiviteit",
        toastVaultCreated: "Kluis Gemaakt",
        toastVaultCreatedMsg: "Je beveiligde kluis is klaar voor gebruik",
        toastSettingsSaved: "Instellingen Opgeslagen",
        toastSettingsSavedMsg: "Je voorkeuren zijn bijgewerkt",
        toastPasswordChanged: "Wachtwoord Gewijzigd",
        toastPasswordChangedMsg: "Je hoofdwachtwoord is bijgewerkt",
        toastDataDeleted: "Gegevens Verwijderd",
        toastDataDeletedMsg: "Alle kluisgegevens zijn verwijderd",
        toastEntryUpdated: "Item Bijgewerkt",
        toastEntryUpdatedMsg: "\"{title}\" is bijgewerkt",
        toastEntryAdded: "Item Toegevoegd",
        toastEntryAddedMsg: "\"{title}\" is toegevoegd",
        toastEntryDeleted: "Item Verwijderd",
        toastEntryDeletedMsg: "\"{title}\" is verwijderd",
        toastAddedToFavorites: "Aan Favorieten Toegevoegd",
        toastRemovedFromFavorites: "Uit Favorieten Verwijderd",
        toastPasswordApplied: "Wachtwoord Toegepast",
        toastPasswordAppliedMsg: "Gegenereerd wachtwoord is ingesteld",
        toastCopied: "{label} Gekopieerd",
        toastClipboardClear: "Klembord wordt gewist over {seconds}s",
        toastCopiedSuccess: "Succesvol gekopieerd",
        toastCopyFailed: "Kopiëren Mislukt",
        toastCopyFailedMsg: "Kon niet naar klembord kopiëren",
        toastClipboardCleared: "Klembord Gewist",
        toastClipboardClearedMsg: "Voor je veiligheid",
        toastExportComplete: "Export Compleet",
        toastExportCompleteMsg: "Kluis backup succesvol opgeslagen",
        toastExportDownloaded: "Kluis backup gedownload",
        toastExportFailed: "Export Mislukt",
        toastExportFailedMsg: "Kon kluis niet exporteren",
        toastNoVaultData: "Geen kluisgegevens gevonden",
        toastImportComplete: "Import Compleet",
        toastImportCompleteMsg: "Voer je hoofdwachtwoord in om te ontgrendelen",
        toastImportFailed: "Import Mislukt",
        toastImportFailedMsg: "Kon kluisbestand niet lezen",
        toastInvalidFile: "Ongeldig Bestand",
        toastInvalidFileMsg: "Dit is geen geldige kluis backup",
        toastVaultLockedFirst: "Ontgrendel eerst de kluis",
        toastPasswordVerified: "Wachtwoord Geverifieerd",
        toastPasswordVerifiedMsg: "Geregenereerd wachtwoord komt overeen met opgeslagen",
        toastPasswordDiffers: "Wachtwoord Verschilt",
        toastPasswordDiffersMsg: "Opgeslagen wachtwoord was niet deterministisch gegenereerd",
        toastVaultReset: "Kluis Gereset",
        toastVaultResetMsg: "Je kluis is gereset.",
        toastSaveFailed: "Opslaan Mislukt",
        toastSaveFailedMsg: "Kon kluisgegevens niet opslaan",
        
        // ===== VALIDATION MESSAGES =====
        pleaseEnterPassword: "Voer je wachtwoord in",
        noVaultFound: "Geen kluis gevonden",
        incorrectPassword: "Onjuist wachtwoord",
        failedToUnlock: "Kluis ontgrendelen mislukt",
        pleaseEnterAPassword: "Voer een wachtwoord in",
        passwordMinLength: "Wachtwoord moet minimaal 8 tekens zijn",
        passwordsDoNotMatch: "Wachtwoorden komen niet overeen",
        failedToCreateVault: "Kluis maken mislukt",
        validationError: "Validatiefout",
        titleRequired: "Titel is verplicht",
        passwordRequired: "Wachtwoord is verplicht",
        allFieldsRequired: "Alle velden zijn verplicht",
        newPasswordMinLength: "Nieuw wachtwoord moet minimaal 8 tekens zijn",
        newPasswordsNoMatch: "Nieuwe wachtwoorden komen niet overeen",
        currentPasswordIncorrect: "Huidig wachtwoord is onjuist",
        failedToChangePassword: "Wachtwoord wijzigen mislukt",
        confirmationRequired: "Bevestiging Vereist",
        typeDeleteToConfirm: "Typ DELETE om te bevestigen",
        
        // ===== BIOMETRIC MESSAGES =====
        biometricNotAvailable: "Niet beschikbaar (vereist HTTPS en compatibel apparaat)",
        biometricEnabled: "Biometrische ontgrendeling is ingeschakeld",
        biometricUseRemoveBtn: "Gebruik Verwijder Knop",
        biometricClickRemove: "Klik \"Verwijderen\" om biometrie uit te schakelen",
        biometricEnterPassword: "Voer je hoofdwachtwoord in om biometrie in te schakelen:",
        biometricError: "Fout",
        biometricWrongPassword: "Verkeerd Wachtwoord",
        biometricWrongPasswordMsg: "Kon hoofdwachtwoord niet verifiëren",
        biometricFailed: "Biometrie Mislukt",
        biometricFailedMsg: "Kon biometrische inloggegevens niet registreren",
        biometricEnabledToast: "Biometrie Ingeschakeld",
        biometricEnabledMsg: "Je kunt nu ontgrendelen met vingerafdruk of Windows Hello",
        biometricSetupFailed: "Instellen Mislukt",
        biometricSetupFailedMsg: "Kon biometrie niet inschakelen",
        biometricNotConfigured: "Niet Geconfigureerd",
        biometricNotConfiguredMsg: "Biometrie niet ingesteld",
        biometricVerifyFailed: "Verificatie Mislukt",
        biometricVerifyFailedMsg: "Biometrische verificatie niet voltooid",
        biometricKeyError: "Sleutelfout",
        biometricKeyErrorMsg: "Kon opgeslagen inloggegevens niet ophalen",
        biometricVaultError: "Kluisfout",
        biometricDecryptFailed: "Ontsleutelen Mislukt",
        biometricDecryptFailedMsg: "Opgeslagen inloggegevens zijn mogelijk verouderd",
        biometricUnlockedMsg: "Ontgrendeld met biometrie",
        biometricCancelled: "Geannuleerd",
        biometricCancelledMsg: "Biometrische verificatie is geannuleerd",
        biometricUnlockFailed: "Ontgrendelen Mislukt",
        biometricUnlockFailedMsg: "Biometrische verificatie mislukt",
        biometricRemoveConfirm: "Biometrische ontgrendeling verwijderen? Je zult je hoofdwachtwoord moeten gebruiken.",
        biometricRemoved: "Biometrie Verwijderd",
        biometricRemovedMsg: "Biometrische ontgrendeling is uitgeschakeld",
        biometricResetNotice: "Biometrie Gereset",
        biometricResetMsg: "Schakel biometrie opnieuw in met nieuw wachtwoord",
        
        // ===== PWA MESSAGES =====
        pwaAppInstalled: "App Geïnstalleerd",
        pwaAppInstalledMsg: "SecureVault toegevoegd aan je apparaat",
        pwaInstallManually: "Handmatig Installeren",
        pwaInstallManuallyMsg: "Gebruik het browsermenu voor \"Toevoegen aan Startscherm\"",
        pwaInstalling: "Installeren...",
        pwaInstallingMsg: "SecureVault wordt toegevoegd",
        
        // ===== SHARE MESSAGES =====
        shareThanks: "Bedankt!",
        shareThanksMsg: "Bedankt voor het delen van SecureVault",
        shareLinkCopied: "Link Gekopieerd",
        shareLinkCopiedMsg: "Deellink naar klembord gekopieerd",
        shareText: "Bekijk SecureVault - een gratis, veilige, offline wachtwoordbeheerder!",
        
        // ===== UPDATE MESSAGES =====
        updateAvailable: "Update beschikbaar (v{version})",
        refresh: "Vernieuwen",
        
        // ===== BOOKMARKLET MESSAGES =====
        dragMe: "Sleep Mij",
        dragToBookmarks: "Sleep deze knop naar je bladwijzerbalk",
        bookmarkletCopied: "Bladwijzercode",
        
        // ===== GENERATOR MESSAGES =====
        enterTitleFirst: "Voer eerst een titel in",
        selectAtLeastOne: "Selecteer minstens één optie",
        
        // ===== CONFIRMATION DIALOGS =====
        confirmResetVault: "Weet je het zeker? Dit zal ALLE lokaal opgeslagen wachtwoorden VERWIJDEREN.",
        confirmResetFinal: "LAATSTE WAARSCHUWING: Dit kan niet ongedaan worden gemaakt. Doorgaan?",
        
        // ===== JSON FILES =====
        jsonFiles: "JSON Bestanden",
        
        // ===== DATE LOCALE =====
        dateLocale: "nl-NL"
    }
};

// ========================================
// i18n STATE & CORE FUNCTIONS
// ========================================

let currentLang = localStorage.getItem('securevault_language') || 'en';

function t(key, replacements = {}) {
    let text = translations[currentLang]?.[key] || translations['en']?.[key] || key;
    
    // Handle replacements like {count}, {title}, {seconds}, etc.
    Object.keys(replacements).forEach(placeholder => {
        text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), replacements[placeholder]);
    });
    
    return text;
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('securevault_language', lang);
        applyTranslations();
        return true;
    }
    return false;
}

function getLanguage() {
    return currentLang;
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'nl' : 'en';
    setLanguage(newLang);
}

// ========================================
// APPLY TRANSLATIONS TO ALL UI ELEMENTS
// ========================================

function applyTranslations() {
    // Page title
    document.title = t('pageTitle');
    
    // ----- LOCK SCREEN -----
    setText('.lock-title', t('appName'));
    setText('.lock-screen .powered-by', t('poweredBy'));
    setText('.lock-subtitle', t('lockSubtitle'));
    setPlaceholder('#masterPasswordInput', t('masterPasswordPlaceholder'));
    setButtonText('#unlockForm .lock-btn', t('unlockVault'), true);
    setButtonText('#biometricUnlockBtn', t('unlockWithBiometrics'), true);
    setText('.forgot-password-link .link-btn', t('forgotPassword'));
    setText('.lock-footer-text', t('noVaultYet'));
    
    // Lock screen action buttons - by order
    const lockActionBtns = document.querySelectorAll('.lock-action-btn');
    if (lockActionBtns[0]) setButtonTextOnly(lockActionBtns[0], t('createNew'));
    if (lockActionBtns[1]) setButtonTextOnly(lockActionBtns[1], t('import'));
    
    // ----- SETUP WIZARD -----
    // Title and description are set dynamically, but we update default
    const setupTitle = document.getElementById('setupTitle');
    const setupDesc = document.getElementById('setupDescription');
    if (setupTitle && setupTitle.textContent === 'Create Your Vault') {
        setupTitle.textContent = t('createYourVault');
    }
    if (setupDesc && setupDesc.textContent.includes('Choose a strong')) {
        setupDesc.textContent = t('setupDescription');
    }
    
    // Setup Step 1 labels
    setLabelByFor('entryVersion', t('version'));
    setHintAfterInput('#entryVersion', t('versionHint'));
    setLabelByFor('setupPassword', t('masterPassword'));
    setPlaceholder('#setupPassword', t('enterMasterPassword'));
    setLabelByFor('setupPasswordConfirm', t('confirmPassword'));
    setPlaceholder('#setupPasswordConfirm', t('confirmMasterPassword'));
    setHintAfterPasswordWrapper('#setupPasswordConfirm', t('passwordRequirements'));
    setLabelByFor('setupPasswordHint', t('passwordHintOptional'));
    setPlaceholder('#setupPasswordHint', t('passwordHintPlaceholder'));
    setHintAfterInput('#setupPasswordHint', t('passwordHintDescription'));
    
    // Setup buttons
    setButtonByOnclick('hideSetupWizard()', t('cancel'));
    setButtonByOnclick('goToSetupStep2()', t('continue'), true);
    setText('.setup-or', t('or'));
    setText('.import-area-title', t('importExistingVault'));
    setText('.import-area-text', t('importDragText'));
    
    // Setup Step 2
    setLabelByFor('setupTimeout', t('autoLockTimeout'));
    setHintAfterSelect('#setupTimeout', t('autoLockHint'));
    setLabelByFor('setupClipboard', t('clipboardClear'));
    setHintAfterSelect('#setupClipboard', t('clipboardHint'));
    setButtonByOnclick('goToSetupStep1()', t('back'), true);
    setButtonByOnclick('completeSetup()', t('createVault'), true);
    
    // Timeout options
    translateSelectOptions('#setupTimeout');
    translateSelectOptions('#setupClipboard');
    translateSelectOptions('#settingsTimeout');
    translateSelectOptions('#settingsClipboard');
    
    // ----- SIDEBAR -----
    setText('.sidebar-brand-name', t('appName'));
    setText('.sidebar-brand-tagline', t('passwordManager'));
    
    // Nav sections
    const navTitles = document.querySelectorAll('.nav-section-title');
    if (navTitles[0]) navTitles[0].textContent = t('main');
    if (navTitles[1]) navTitles[1].textContent = t('categories');
    
    // Nav items
    setNavItemText('[data-view="all"]', t('allItems'));
    setNavItemText('[data-view="favorites"]', t('favorites'));
    setNavItemText('[data-category="social"]', t('catSocial'));
    setNavItemText('[data-category="banking"]', t('catBanking'));
    setNavItemText('[data-category="email"]', t('catEmail'));
    setNavItemText('[data-category="work"]', t('catWork'));
    setNavItemText('[data-category="shopping"]', t('catShopping'));
    setNavItemText('[data-category="travel"]', t('catTravel'));
    setNavItemText('[data-category="entertainment"]', t('catEntertainment'));
    setNavItemText('[data-category="health"]', t('catHealth'));
    setNavItemText('[data-category="education"]', t('catEducation'));
    setNavItemText('[data-category="other"]', t('catOther'));
    
    // Sidebar footer buttons
    const sidebarBtns = document.querySelectorAll('.sidebar-footer-btn');
    sidebarBtns.forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        if (onclick?.includes('openSettings')) setButtonTextOnly(btn, t('settings'));
        if (onclick?.includes('exportVault')) setButtonTextOnly(btn, t('exportBackup'));
        if (onclick?.includes('lockVault')) setButtonTextOnly(btn, t('lockVault'));
    });
    
    // ----- HEADER -----
    setPlaceholder('#searchInput', t('searchPlaceholder'));
    setTitle('[onclick="toggleTheme()"]', t('toggleTheme'));
    setButtonText('.add-entry-btn', t('addEntry'), true);
    
    // ----- SORT OPTIONS -----
    translateSortOptions();

// ----- VIEW ENTRY MODAL -----
setText('#viewEntryModal .modal-title', t('viewEntryTitle'));
setText('#viewUsernameField .entry-field-label', t('usernameEmail'));
setText('#viewEntryModal .entry-field-label:nth-of-type(1)', t('password'));
const viewEntryLabels = document.querySelectorAll('#viewEntryModal .entry-field-label');
if (viewEntryLabels[0]) viewEntryLabels[0].textContent = t('usernameEmail');
if (viewEntryLabels[1]) viewEntryLabels[1].textContent = t('password');
if (viewEntryLabels[2]) viewEntryLabels[2].textContent = t('website');
if (viewEntryLabels[3]) viewEntryLabels[3].textContent = t('notes');
if (viewEntryLabels[4]) viewEntryLabels[4].textContent = t('lastModified');

const viewEntryFooterBtns = document.querySelectorAll('#viewEntryModal .modal-footer .btn');
if (viewEntryFooterBtns[0]) setButtonTextOnly(viewEntryFooterBtns[0], t('deleteBtn'));
if (viewEntryFooterBtns[1]) viewEntryFooterBtns[1].textContent = t('closeBtn');
if (viewEntryFooterBtns[2]) setButtonTextOnly(viewEntryFooterBtns[2], t('editBtn'));
    
    // ----- ENTRY MODAL -----
    // Title is set dynamically
    setLabelByFor('entryTitle', t('title'), true);
    setPlaceholder('#entryTitle', t('titlePlaceholder'));
    setLabelByFor('entryCategory', t('category'));
    setLabelByFor('entryUsername', t('usernameEmail'));
    setPlaceholder('#entryUsername', t('usernamePlaceholder'));
    setLabelByFor('entryPassword', t('password'), true);
    setPlaceholder('#entryPassword', t('enterPassword'));
    setTitle('[onclick*="togglePasswordVisibility"][onclick*="entryPassword"]', t('showHide'));
    setTitle('[onclick="toggleGeneratorPanel()"]', t('generatePasswordTitle'));
    setLabelByFor('entryUrl', t('websiteUrl'));
    setPlaceholder('#entryUrl', t('urlPlaceholder'));
    setLabelByFor('entryNotes', t('notes'));
    setPlaceholder('#entryNotes', t('notesPlaceholder'));
    setLabelByFor('entryFavorite', t('addToFavorites'));
    setButtonByOnclick('closeEntryModal()', t('cancel'));
    setButtonByOnclick('saveEntry()', t('saveEntry'), true);
    
    // Password Generator
    setText('.generator-title', t('passwordGenerator'), true);
    const genPassword = document.getElementById('generatedPassword');
    if (genPassword && genPassword.textContent === 'Click generate to create password') {
        genPassword.textContent = t('clickToGenerate');
    }
    setTitle('[onclick="generatePassword()"]', t('generate'));
    setTitle('[onclick="useGeneratedPassword()"]', t('useThisPassword'));
    setLabelByFor('genModeRandom', t('random'));
    setLabelByFor('genModeDeterministic', t('regeneratable'));
    setText('.range-label', t('passwordLength'));
    setLabelByFor('genUppercase', t('uppercase'));
    setLabelByFor('genLowercase', t('lowercase'));
    setLabelByFor('genNumbers', t('numbers'));
    setLabelByFor('genSymbols', t('symbols'));
    
    // ----- VIEW ENTRY MODAL -----
    setModalTitle('#viewEntryModal', t('entryDetails'));
    setFieldLabel('#viewUsernameField', t('usernameEmail'));
    setFieldLabel('#viewEntryModal .entry-field:nth-of-type(2)', t('password'));
    setFieldLabel('#viewUrlField', t('website'));
    setFieldLabel('#viewNotesField', t('notes'));
    setFieldLabel('#viewEntryModal .entry-field:last-of-type', t('lastModified'));
    
    setButtonByOnclick('confirmDeleteEntry()', t('delete'), true);
    setButtonByOnclick('closeViewEntryModal()', t('close'));
    setButtonByOnclick('editCurrentEntry()', t('edit'), true);
    
    // ----- DELETE MODAL -----
    setModalTitle('#deleteModal', t('deleteEntry'));
    setButtonByOnclick('closeDeleteModal()', t('cancel'));
    setButtonByOnclick('deleteEntry()', t('deleteEntry'), true);
    
    const deleteModalBody = document.querySelector('#deleteModal .modal-body');
    if (deleteModalBody) {
        const p = deleteModalBody.querySelector('p');
        if (p) {
            const strong = p.querySelector('strong');
            const entryName = strong ? strong.textContent : t('thisEntry');
            p.innerHTML = `${t('deleteConfirm')} <strong>${entryName}</strong>?`;
        }
        const mutedP = deleteModalBody.querySelector('.text-muted');
        if (mutedP) mutedP.textContent = t('cannotBeUndone');
    }
    
    // ----- SETTINGS MODAL -----
    setModalTitle('#settingsModal', t('settings'));
    
    // Settings items - using title matching
    setSettingsItem('Share SecureVault', 'shareSecureVault', 'inviteOthers');
    setSettingsItem('Install App', 'installApp', 'addToHomeScreen');
    setSettingsItem('Bookmarklet', 'bookmarklet', 'bookmarkletDesc');
    setSettingsItem('Auto-Lock Timeout', 'autoLockTimeout', 'lockVaultAfterInactivity');
    setSettingsItem('Clipboard Auto-Clear', 'clipboardClear', 'clearClipboardAfterCopying');
    setSettingsItem('Change Master Password', 'changeMasterPassword', 'updateVaultPassword');
    setSettingsItem('Biometric Unlock', 'biometricUnlock', 'biometricDesc');
    setSettingsItem('Remove Biometric Data', 'removeBiometricData', 'removeBiometricDesc');
    setSettingsItem('Dark Mode', 'darkMode', 'darkModeDesc');
    setSettingsItem('Export Vault', 'exportVault', 'exportDesc');
    setSettingsItem('Import Vault', 'importVault', 'importDesc');
    setSettingsItem('Delete All Data', 'deleteAllData', 'deleteAllDesc');
    setSettingsItem('View Tutorial', 'viewTutorial', 'tutorialDesc');
    setSettingsItem('SecureVault', 'appName', 'offlinePasswordManager', true);
    setSettingsItem('Encryption', 'encryption', 'encryptionType');
    setSettingsItem('Total Entries', 'totalEntries', null);
    
    // Settings section titles
    const sectionTitles = document.querySelectorAll('#settingsModal .settings-section-title');
    sectionTitles.forEach(title => {
        const text = title.textContent.trim();
        if (text === 'Quick Access') title.textContent = t('quickAccess');
        if (text === 'Security') title.textContent = t('security');
        if (text === 'Appearance') title.textContent = t('appearance');
        if (text === 'Data Management') title.textContent = t('dataManagement');
        if (text === 'Help') title.textContent = t('help');
        if (text === 'About') title.textContent = t('about');
    });
    
    // Settings buttons
    setButtonByOnclick('shareApp()', t('share'), true);
    setButtonByOnclick('installPwa()', t('install'), true);
    setButtonByOnclick('copyBookmarklet()', t('copyCode'), true);
    setButtonByOnclick('showChangePassword()', t('change'));
    setButtonByOnclick('removeBiometrics()', t('remove'));
    setButtonByOnclick('confirmDeleteAllData()', t('deleteAll'));
    setButtonByOnclick('showTutorial()', t('showTutorial'), true);
    setButtonByOnclick('closeSettings()', t('done'));
    
    // Vault URL label
    setLabelByFor('vaultUrl', t('vaultUrl'));
    setHintAfterInput('#vaultUrl', t('vaultUrlHint'));
    
    // Installed text
    const installedText = document.getElementById('pwaInstalledText');
    if (installedText) installedText.textContent = t('installed');
    
    // ----- CHANGE PASSWORD MODAL -----
    setModalTitle('#changePasswordModal', t('changeMasterPassword'));
    setLabelByFor('currentPassword', t('currentPassword'));
    setPlaceholder('#currentPassword', t('enterCurrentPassword'));
    setLabelByFor('newPassword', t('newPassword'));
    setPlaceholder('#newPassword', t('enterNewPassword'));
    setLabelByFor('confirmNewPassword', t('confirmNewPassword'));
    setPlaceholder('#confirmNewPassword', t('confirmNewPasswordPlaceholder'));
    setButtonByOnclick('closeChangePassword()', t('cancel'));
    setButtonByOnclick('changePassword()', t('changePasswordBtn'));
    
    // ----- DELETE ALL MODAL -----
    setModalTitle('#deleteAllModal', t('deleteAllDataTitle'));
    setButtonByOnclick('closeDeleteAllModal()', t('cancel'));
    setButtonByOnclick('deleteAllData()', t('deleteEverything'));
    
    const deleteAllBody = document.querySelector('#deleteAllModal .modal-body');
    if (deleteAllBody) {
        const mainP = deleteAllBody.querySelector('p strong')?.parentElement;
        if (mainP) mainP.innerHTML = `<strong>${t('willPermanentlyDelete')}</strong>`;
        
        const listItems = deleteAllBody.querySelectorAll('li');
        if (listItems[0]) listItems[0].textContent = t('allSavedPasswords');
        if (listItems[1]) listItems[1].textContent = t('allSettings');
        if (listItems[2]) listItems[2].textContent = t('yourMasterPassword');
        
        const confirmLabel = deleteAllBody.querySelector('.form-label');
        if (confirmLabel) confirmLabel.textContent = t('typeDeleteConfirm');
    }
    
    // ----- FORGOT PASSWORD MODAL -----
    setModalTitle('#forgotPasswordModal', t('forgotPasswordTitle'));
    
    const forgotBody = document.querySelector('#forgotPasswordModal .modal-body');
    if (forgotBody) {
        const hintLabel = forgotBody.querySelector('#passwordHintDisplay > div:first-child');
        if (hintLabel) hintLabel.textContent = t('yourPasswordHint');
        
        const h3 = forgotBody.querySelector('h3');
        if (h3) h3.textContent = t('cantRememberPassword');
        
        const paras = forgotBody.querySelectorAll('p');
        paras.forEach(p => {
            if (p.textContent.includes('encrypted and cannot')) {
                p.textContent = t('vaultEncryptedWarning');
            }
            if (p.textContent.includes('Resetting will delete')) {
                p.textContent = t('resetWarning');
            }
        });
        
        const infoBoxes = forgotBody.querySelectorAll('[style*="accent-light"]');
        infoBoxes.forEach(box => {
            const strong = box.querySelector('strong');
            const p = box.querySelector('p');
            if (strong?.textContent?.includes('Regenerator')) {
                strong.textContent = t('usedRegenerator');
                if (p) p.textContent = t('regeneratorReminder');
            }
            if (strong?.textContent?.includes('export file')) {
                strong.textContent = t('haveExportFile');
                if (p) p.textContent = t('exportFileAdvice');
            }
        });
    }
    
    setButtonByOnclick('closeForgotPassword()', t('iRememberNow'));
    setButtonByOnclick('confirmResetVault()', t('resetVault'));
    
    // ----- CATEGORY SELECTS -----
    translateCategoryOptions('#entryCategory');
    
    // ----- UPDATE COUNTS (if app is loaded) -----
    if (typeof AppState !== 'undefined' && AppState.isUnlocked) {
        updateTranslatedCounts();
    }
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function setText(selector, text, keepSvg = false) {
    const el = document.querySelector(selector);
    if (el) {
        if (keepSvg) {
            const svg = el.querySelector('svg');
            if (svg) {
                el.innerHTML = '';
                el.appendChild(svg);
                el.appendChild(document.createTextNode(' ' + text));
            } else {
                el.textContent = text;
            }
        } else {
            el.textContent = text;
        }
    }
}

function setPlaceholder(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.placeholder = text;
}

function setTitle(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.title = text;
}

function setButtonText(selector, text, hasSvg = false) {
    const el = document.querySelector(selector);
    if (el) {
        if (hasSvg) {
            const svg = el.querySelector('svg');
            const span = el.querySelector('span');
            if (span) {
                span.textContent = text;
            } else if (svg) {
                // Remove all text nodes and add new one
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === 3) node.remove();
                });
                el.appendChild(document.createTextNode(' ' + text));
            }
        } else {
            el.textContent = text;
        }
    }
}

function setButtonTextOnly(el, text) {
    if (!el) return;
    const svg = el.querySelector('svg');
    if (svg) {
        el.innerHTML = '';
        el.appendChild(svg);
        el.appendChild(document.createTextNode(' ' + text));
    } else {
        el.textContent = text;
    }
}

function setButtonByOnclick(onclickContains, text, hasSvg = false) {
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        if (onclick && onclick.includes(onclickContains)) {
            setButtonTextOnly(btn, text);
        }
    });
}

function setNavItemText(selector, text) {
    const el = document.querySelector(selector);
    if (el) {
        const textEl = el.querySelector('.nav-item-text');
        if (textEl) textEl.textContent = text;
    }
}

function setLabelByFor(forAttr, text, hasRequired = false) {
    const label = document.querySelector(`label[for="${forAttr}"], label:has(+ #${forAttr}), .form-group:has(#${forAttr}) .form-label`);
    if (!label) {
        // Try finding by looking at adjacent elements
        const input = document.getElementById(forAttr);
        if (input) {
            const parent = input.closest('.form-group');
            if (parent) {
                const lbl = parent.querySelector('.form-label');
                if (lbl) {
                    if (hasRequired) {
                        lbl.innerHTML = `${text} <span class="required">*</span>`;
                    } else {
                        lbl.textContent = text;
                    }
                }
            }
        }
        return;
    }
    if (hasRequired) {
        label.innerHTML = `${text} <span class="required">*</span>`;
    } else {
        label.textContent = text;
    }
}

function setHintAfterInput(selector, text) {
    const input = document.querySelector(selector);
    if (input) {
        const parent = input.closest('.form-group');
        if (parent) {
            const hint = parent.querySelector('.form-hint');
            if (hint) hint.textContent = text;
        }
    }
}

function setHintAfterPasswordWrapper(selector, text) {
    const input = document.querySelector(selector);
    if (input) {
        const wrapper = input.closest('.password-input-wrapper');
        if (wrapper) {
            const hint = wrapper.parentElement.querySelector('.form-hint');
            if (hint) hint.textContent = text;
        }
    }
}

function setHintAfterSelect(selector, text) {
    const select = document.querySelector(selector);
    if (select) {
        const parent = select.closest('.form-group') || select.parentElement;
        if (parent) {
            const hint = parent.querySelector('.form-hint');
            if (hint) hint.textContent = text;
        }
    }
}

function setModalTitle(modalSelector, text) {
    const modal = document.querySelector(modalSelector);
    if (modal) {
        const title = modal.querySelector('.modal-title');
        if (title) title.textContent = text;
    }
}

function setFieldLabel(selector, text) {
    const field = document.querySelector(selector);
    if (field) {
        const label = field.querySelector('.entry-field-label');
        if (label) label.textContent = text;
    }
}

function setSettingsItem(titleMatch, titleKey, descKey, isAbout = false) {
    const items = document.querySelectorAll('.settings-item');
    items.forEach(item => {
        const titleEl = item.querySelector('.settings-item-title');
        if (titleEl && titleEl.textContent.trim() === titleMatch) {
            titleEl.textContent = t(titleKey);
            if (descKey) {
                const descEl = item.querySelector('.settings-item-desc');
                if (descEl && !descEl.textContent.includes('Powered by')) {
                    descEl.textContent = t(descKey);
                }
            }
        }
    });
}

function translateSelectOptions(selector) {
    const select = document.querySelector(selector);
    if (!select) return;
    
    select.querySelectorAll('option').forEach(opt => {
        const val = opt.value;
        switch(val) {
            case '1': opt.textContent = t('oneMinute'); break;
            case '5': opt.textContent = t('fiveMinutes'); break;
            case '15': 
                opt.textContent = opt.textContent.includes('second') ? t('fifteenSeconds') : t('fifteenMinutes');
                break;
            case '30':
                opt.textContent = opt.textContent.includes('second') ? t('thirtySeconds') : t('thirtyMinutes');
                break;
            case '60': opt.textContent = t('oneHour'); break;
            case '0': opt.textContent = t('never'); break;
        }
    });
}

function translateSortOptions() {
    const select = document.getElementById('sortSelect');
    if (!select) return;
    
    select.querySelectorAll('option').forEach(opt => {
        switch(opt.value) {
            case 'name-asc': opt.textContent = t('sortNameAsc'); break;
            case 'name-desc': opt.textContent = t('sortNameDesc'); break;
            case 'date-new': opt.textContent = t('sortNewest'); break;
            case 'date-old': opt.textContent = t('sortOldest'); break;
            case 'category': opt.textContent = t('sortCategory'); break;
        }
    });
}

function translateCategoryOptions(selector) {
    const select = document.querySelector(selector);
    if (!select) return;
    
    select.querySelectorAll('option').forEach(opt => {
        switch(opt.value) {
            case 'social': opt.textContent = t('catSocial'); break;
            case 'banking': opt.textContent = t('catBanking'); break;
            case 'email': opt.textContent = t('catEmail'); break;
            case 'work': opt.textContent = t('catWork'); break;
            case 'shopping': opt.textContent = t('catShopping'); break;
            case 'travel': opt.textContent = t('catTravel'); break;
            case 'entertainment': opt.textContent = t('catEntertainment'); break;
            case 'health': opt.textContent = t('catHealth'); break;
            case 'education': opt.textContent = t('catEducation'); break;
            case 'other': opt.textContent = t('catOther'); break;
        }
    });
}

function updateTranslatedCounts() {
    if (typeof AppState === 'undefined') return;
    
    const count = AppState.entries?.length || 0;
    const countText = count === 1 ? t('passwordCountOne') : t('passwordCount', { count });
    const el = document.getElementById('entriesCount');
    if (el) el.textContent = countText;
    
    const storedText = count === 1 ? t('passwordStoredOne') : t('passwordsStored', { count });
    const storedEl = document.getElementById('settingsTotalEntries');
    if (storedEl) storedEl.textContent = storedText;
}

// Get translated category name
function getCategoryName(category) {
    const key = 'cat' + category.charAt(0).toUpperCase() + category.slice(1);
    return t(key) || category;
}

// Get date locale
function getDateLocale() {
    return t('dateLocale');
}

// ========================================
// INITIALIZE ON LOAD
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Apply translations after a small delay to ensure DOM is ready
    setTimeout(applyTranslations, 50);
});

// Also expose a function to reapply after dynamic content changes

window.refreshTranslations = applyTranslations;
