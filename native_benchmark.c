#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
#include <sys/stat.h>
#include <time.h>
#include <string.h>

int main(int argc, char *argv[]) {
    const char *path = (argc > 1) ? argv[1] : ".";
    printf("--- ⚡ Native C Direct Syscall Benchmark ---\n");
    printf("Target Directory: %s\n", path);

    struct timespec start, end;
    clock_gettime(CLOCK_MONOTONIC, &start);

    DIR *dir = opendir(path);
    int count = 0;
    long long totalBytes = 0;

    if (dir) {
        struct dirent *entry;
        char fullPath[4096];
        struct stat st;

        while ((entry = readdir(dir)) != NULL) {
            if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) continue;
            count++;

            snprintf(fullPath, sizeof(fullPath), "%s/%s", path, entry->d_name);
            if (stat(fullPath, &st) == 0) {
                if (S_ISREG(st.st_mode)) {
                    totalBytes += st.st_size;
                }
            }
        }
        closedir(dir);
    }

    clock_gettime(CLOCK_MONOTONIC, &end);
    double durationMs = (end.tv_sec - start.tv_sec) * 1000.0 + (end.tv_nsec - start.tv_nsec) / 1000000.0;

    printf("Files Scanned: %d\n", count);
    printf("Total Bytes: %lld\n", totalBytes);
    printf("Execution Time: %.3f ms\n", durationMs);

    return 0;
}
