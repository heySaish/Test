import java.io.File;

public class JavaFileBenchmark {
    public static void main(String[] args) {
        String path = args.length > 0 ? args[0] : ".";
        System.out.println("--- ☕ Java JVM File System Benchmark ---");
        System.out.println("Target Directory: " + path);

        long startTime = System.nanoTime();
        File dir = new File(path);
        File[] files = dir.listFiles();
        int count = 0;
        long totalBytes = 0;

        if (files != null) {
            for (File f : files) {
                count++;
                if (f.isFile()) {
                    totalBytes += f.length();
                }
                long mod = f.lastModified();
                boolean isDir = f.isDirectory();
            }
        }
        long endTime = System.nanoTime();
        double durationMs = (endTime - startTime) / 1_000_000.0;

        System.out.println("Files Scanned: " + count);
        System.out.println("Total Bytes: " + totalBytes);
        System.out.printf("Execution Time: %.3f ms\n", durationMs);
    }
}
