use std::fs;
use std::path::Path;
use std::time::Instant;

fn main() {
    let args: Vec<String> = std::env::args().collect();
    let target_dir = if args.len() > 1 { &args[1] } else { "." };

    println!("--- 🦀 Rust Native File System Benchmark ---");
    println!("Target Directory: {}", target_dir);

    let start = Instant::now();
    let mut file_count = 0;
    let mut total_bytes = 0u64;

    if let Ok(entries) = fs::read_dir(Path::new(target_dir)) {
        for entry in entries.flatten() {
            file_count += 1;
            if let Ok(metadata) = entry.metadata() {
                if metadata.is_file() {
                    total_bytes += metadata.len();
                }
            }
        }
    }

    let duration = start.elapsed();

    println!("Files Scanned: {}", file_count);
    println!("Total Bytes: {}", total_bytes);
    println!("Execution Time: {:.3} ms ({:?})", duration.as_secs_f64() * 1000.0, duration);
}
