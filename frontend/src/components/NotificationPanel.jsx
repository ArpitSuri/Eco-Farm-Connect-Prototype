import React, { useState, useEffect } from "react";
import { Bell, Trash2, Check } from "lucide-react";
import axios from "axios";
// import mongoose from "mongoose";

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasNew, setHasNew] = useState(true);
  const user = {
    // id: mongoose.Schema.ObjectId,
    id:"",
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/notifications");
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    setHasNew(false);
  };

  const removeNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notifications/${id}`);
      setNotifications(notifications.filter((notification) => notification._id !== id));
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  const handleAccept = async (notification) => {
    try {
      const response = await axios.post("http://localhost:5000/api/accept-notification", {
        receiverId: user.id,
        senderId: notification.senderId,
      });
      console.log("IDs saved:", response.data);
      removeNotification(notification._id);
    } catch (error) {
      console.error("Error saving IDs:", error);
    }
  };

  return (
    <div style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 50 }}>
      <button
        onClick={togglePanel}
        style={{
          position: "relative",
          padding: "0.5rem",
          backgroundColor: "white",
          borderRadius: "50%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Bell style={{ height: "1.75rem", width: "1.75rem", color: "#374151" }} />
        {hasNew && (
          <span
            style={{
              position: "absolute",
              top: "0.25rem",
              right: "0.25rem",
              backgroundColor: "#ef4444",
              height: "0.75rem",
              width: "0.75rem",
              borderRadius: "50%",
              animation: "pulse 1.5s infinite",
            }}
          ></span>
        )}
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: "0.5rem",
            width: "20rem",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.75rem",
            border: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        >
          <div style={{ backgroundColor: "#16a34a", color: "white", padding: "1rem", display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: "600" }}>Notifications</h2>
            <button onClick={togglePanel}>
              <Bell style={{ height: "1.75rem", width: "1.75rem", color: "white" }} />
            </button>
          </div>

          <div style={{ padding: "1rem", maxHeight: "16rem", overflowY: "auto" }}>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div key={notification._id} style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#f3f4f6", padding: "0.75rem", borderRadius: "0.5rem", marginBottom: "0.5rem" }}>
                  <div>
                    <p style={{ fontWeight: "500", color: "#1f2937" }}>{notification.message}</p>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{notification.time}</p>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button onClick={() => handleAccept(notification)} style={{ backgroundColor: "#16a34a", color: "white", padding: "0.25rem 0.5rem", borderRadius: "0.375rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Check style={{ height: "1rem", width: "1rem" }} /> Accept
                    </button>
                    <button onClick={() => removeNotification(notification._id)} style={{ backgroundColor: "transparent", color: "#ef4444", border: "none", cursor: "pointer" }}>
                      <Trash2 style={{ height: "1rem", width: "1rem" }} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", color: "#6b7280" }}>No new notifications</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;
