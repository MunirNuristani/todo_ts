from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait


opts = Options()
driver = webdriver.Chrome(options=opts)
driver.get("http://localhost:3000")


driver.find_element(By.ID, "textInput").send_keys("newTask")
driver.find_element(By.ID, "deadlineDate").send_keys("2023-11-01")
driver.find_element(By.ID, "taskPriority").send_keys("High")
driver.find_element(By.ID, "createTask"). click()

