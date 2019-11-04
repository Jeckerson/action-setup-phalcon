import * as exec from '@actions/exec';

export async function getPhalcon(): Promise<void> {
    await exec.exec(`curl -s https://packagecloud.io/install/repositories/phalcon/mainline/script.deb.sh | sudo bash`);
}
