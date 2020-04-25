export function getEnv(key, fallback=null) {
    const allEnvArgs = process.env;

    return allEnvArgs[key] || fallback;
}

export function getArg(key, fallback=null) {
    const allArgs = minimist(process.argv.slice(2));

    return allArgs[key] || fallback;
}
