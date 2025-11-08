/* 
    Refer to https://help.obsidian.md/create-note and
    https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names
    for which characters are not allowed in file names.
 */
export const UNSAFE_FILE_NAME_CHARACTERS = ['/','\\','<','>',':','"','|','?','*'];

export const DEFAULT_INDEX_SEPARATOR = "-";

export const MAX_SEPARATOR_LENGTH = 5;

export function containsUnsafeFileNameCharacters(value: string): boolean {
    return UNSAFE_FILE_NAME_CHARACTERS.some(char => value.includes(char));
}
