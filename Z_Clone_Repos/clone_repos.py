import requests
import csv
import subprocess
import os

def clone_repos_from_sheet(sheet_url, clone_path=""):
    """
    Clones all repositories listed in column A of a Google Sheets CSV.

    Parameters:
    - sheet_url (str): The URL to the Google Sheets CSV export.
    - clone_path (str): The directory path to clone the repositories into. If empty, clones into the current directory.
    """
    # Set the clone path to current directory if not provided
    if not clone_path:
        clone_path = os.getcwd()

    # Download the CSV content from the Google Sheets URL
    response = requests.get(sheet_url)
    response.raise_for_status()  # Check for HTTP errors

    # Decode the CSV content
    csv_content = response.content.decode('utf-8')

    # Parse the CSV data
    repo_urls = csv.reader(csv_content.splitlines())

    # Iterate through the rows and clone the repositories from column A
    for row in repo_urls:
        repo_url = row[0].strip()  # Get the first column (repo URL) and strip any extra spaces
        if repo_url:  # Ensure it's not an empty string
            print(f"Cloning {repo_url} into {clone_path}...")
            try:
                # Run the git clone command, using the specified path
                subprocess.run(["git", "clone", repo_url, clone_path], check=True)
            except subprocess.CalledProcessError as e:
                print(f"Failed to clone {repo_url}: {e}")

    print("All repositories cloned!")

# Example usage:
# Provide the Google Sheets URL and the path (optional)
sheet_url = "https://docs.google.com/spreadsheets/d/your_public_ghseet_id/export?format=csv&gid=1002046288"
clone_repos_from_sheet(sheet_url, "/path/to/clone/folder")  # Replace with the desired path


# import requests
# import csv
# import subprocess

# # Google Sheets URL for the 'MyRepoBackUps' tab as CSV
# sheet_url = "https://docs.google.com/spreadsheets/d/......"

# # Download the CSV content
# response = requests.get(sheet_url)
# response.raise_for_status()  # Check for HTTP errors

# # Decode the CSV content
# csv_content = response.content.decode('utf-8')

# # Parse the CSV data
# repo_urls = csv.reader(csv_content.splitlines())

# # Iterate through the rows and clone the repositories from column A
# for row in repo_urls:
#     repo_url = row[0].strip()  # Get the first column (repo URL) and strip any extra spaces
#     if repo_url:  # Ensure it's not an empty string
#         print(f"Cloning {repo_url}...")
#         try:
#             subprocess.run(["git", "clone", repo_url], check=True)
#         except subprocess.CalledProcessError as e:
#             print(f"Failed to clone {repo_url}: {e}")

# print("All repositories cloned!")