async function doWebAuthnCreate() {
    const publicKeyCredentialCreationOptions = {
        challenge: Uint8Array.from(
            "hi", c => c.charCodeAt(0)),
        rp: {
            name: "Duo Security",
            id: "frykmanm.xyz",
        },
        user: {
            id: Uint8Array.from(
                "UZSL85T9AFC", c => c.charCodeAt(0)),
            name: "lee@webauthn.guide",
            displayName: "Lee",
        },
        pubKeyCredParams: [{alg: -7, type: "public-key"}],
        authenticatorSelection: {
            authenticatorAttachment: "cross-platform",
        },
        timeout: 60000,
        attestation: "direct"
    };
    
    const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions
    });

    console.log(credential);
    
}